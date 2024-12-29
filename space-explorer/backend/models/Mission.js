const mongoose = require('mongoose');

const MissionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  details: { type: String, required: true },
  launchDate: { type: Date, required: true },
  status: { type: String, enum: ['Upcoming', 'Ongoing', 'Completed'], required: true },
});

module.exports = mongoose.model('Mission', MissionSchema);
