const express = require("express")
const app = express()
const userRouter = require('./routes/users')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index', {text: 'world'})
})

app.use('/users', userRouter)

app.listen(3000)