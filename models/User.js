const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  backgrounds: [String], // URL of a custom background  
});

module.exports = mongoose.model('User', UserSchema);
