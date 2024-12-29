const mongoose = require('mongoose');

const PlanetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mass: { type: Number, required: true }, // Mass in kilograms
  radius: { type: Number, required: true }, // Radius in kilometers
  gravity: { type: Number, required: true }, // Gravity in m/s²
  description: { type: String, required: true },
});

module.exports = mongoose.model('Planet', PlanetSchema);
