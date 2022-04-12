const mongoose = require('mongoose')

const Quiz = new mongoose.Schema({
  question: {
    type: String,
  },
  allAns: [
    {
      type: String,
    },
  ],
  anwser: {
    type: String,
  },
})

module.exports = mongoose.model('quiz', Quiz)
