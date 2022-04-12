const express = require('express')
const Quiz = require('../models/quiz')

const router = express.Router()

// get all
router.get('/', async (req, res) => {
  const quizs = await Quiz.find()
  res.send(quizs)
})

// get one
router.get('/:id', async function (req, res) {
  const id = req.params.id
  const quizs = await Quiz.findOne({
    _id: id,
  })
  res.send(quizs)
})

router.post('/', async function (req, res) {
  const body = req.body
  try {
    await Quiz.create(body)
    res.send(body)
  } catch (error) {
    console.log(error)
    res.send('post incomplete')
  }
})

router.delete('/:id', async function (req, res) {
  const id = req.params.id
  await Quiz.deleteOne({
    _id: id,
  })
  res.send('delete complete')
})

router.patch('/:id', async function (req, res) {
  const id = req.params.id
  const body = req.body
  try {
    await Quiz.updateOne(
      {
        _id: id,
      },
      { $set: body },
    )
    res.send('patch complete')
  } catch (error) {
    console.log(error)
    res.send('patch incomplete')
  }
})

module.exports = router
