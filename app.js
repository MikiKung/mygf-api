const db = require('./db/mongo')
const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const cors = require('cors')
db
const quiz = require('./controllers/quiz.js')
// const category = require('./controller/category.js')
// const user = require('./controller/user.js')
// const post = require('./controller/post.js')

app.use(
  cors({
    origin: '*',
  }),
)
app.get('/', (req, res) => {
  res.json('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.use(express.json())
app.use('/quiz', quiz)
// app.use('/user', user)
// app.use('/post', post)
