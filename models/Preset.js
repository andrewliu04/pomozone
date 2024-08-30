const mongoose = require('mongoose');

const PresetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  workDuration: { type: Number, required: true }, 
  breakDuration: { type: Number, required: true }, 
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Preset', PresetSchema);
