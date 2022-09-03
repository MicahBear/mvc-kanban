// const mongoose = require('mongoose')

// const TodoSchema = new mongoose.Schema({
//   todo: {
//     type: String,
//     required: true,
//   },
//   completed: {
//     type: Boolean,
//     required: true,
//   },
//   userId: {
//     type: String,
//     required: true
//   }
// })

// module.exports = mongoose.model('Todo', TodoSchema)


const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: true,
    default: 'progress',
    enum: ['progress', 'completed']
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Todo', TodoSchema)
