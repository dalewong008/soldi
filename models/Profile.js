const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  address: {
    type: [String],
    default: [],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  experience: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'experience',
  },
});

module.exports = mongoose.model('profile', ProfileSchema);
