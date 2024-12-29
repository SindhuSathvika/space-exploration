const express = require('express');
const router = express.Router();
const Mission = require('../models/Mission');

// Get all missions
router.get('/', async (req, res) => {
  try {
    const missions = await Mission.find();
    res.json(missions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching missions' });
  }
});

// Add a new mission
router.post('/', async (req, res) => {
  const { name, details, launchDate, status } = req.body;
  const newMission = new Mission({ name, details, launchDate, status });

  try {
    const savedMission = await newMission.save();
    res.status(201).json(savedMission);
  } catch (error) {
    res.status(500).json({ message: 'Error saving mission' });
  }
});

// Update a mission
router.put('/:id', async (req, res) => {
  try {
    const updatedMission = await Mission.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedMission);
  } catch (error) {
    res.status(500).json({ message: 'Error updating mission' });
  }
});

// Delete a mission
router.delete('/:id', async (req, res) => {
  try {
    await Mission.findByIdAndDelete(req.params.id);
    res.json({ message: 'Mission deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting mission' });
  }
});

module.exports = router;
