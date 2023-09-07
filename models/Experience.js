const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
  jackpot: [{
    id: {
      type: Number,
      required: true,
      unique: true
    },
    account: {
      type: String,
      required: true
    },
    betAmount: {
      type: Number,
      required: true
    },
    prizeAmount: {
      type: Number,
      default: 0
    }
  }],
});

module.exports = mongoose.model('experience', ExperienceSchema);
