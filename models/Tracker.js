const mongoose = require('mongoose');

const TrackerSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  workTime: { type: Number, required: true }, 
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Tracker', TrackerSchema);
