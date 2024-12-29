const express = require('express');
const router = express.Router();
const Planet = require('../models/Planet');

// Get all planets
router.get('/', async (req, res) => {
  try {
    const planets = await Planet.find();
    res.json(planets);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching planets' });
  }
});

// Add a new planet
router.post('/', async (req, res) => {
  const { name, mass, radius, gravity, description } = req.body;
  const newPlanet = new Planet({ name, mass, radius, gravity, description });

  try {
    const savedPlanet = await newPlanet.save();
    res.status(201).json(savedPlanet);
  } catch (error) {
    res.status(500).json({ message: 'Error saving planet' });
  }
});

// Update a planet
router.put('/:id', async (req, res) => {
  try {
    const updatedPlanet = await Planet.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPlanet);
  } catch (error) {
    res.status(500).json({ message: 'Error updating planet' });
  }
});

// Delete a planet
router.delete('/:id', async (req, res) => {
  try {
    await Planet.findByIdAndDelete(req.params.id);
    res.json({ message: 'Planet deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting planet' });
  }
});

module.exports = router;
