const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
  res.send('User list')
})

router.get('/new', (req, res) => {
  res.render('users/new', {firstName: "Test"})
})

router.post('/', (req, res) => {
  const isValid = true
  if(isValid){
    users.push({firstName: req.body.firstName })
    res.redirect(`/users/${users.length - 1}`)
  } else {
    console.log("error")
    res.render('users/new', { firstName: req.body.firstName })
  }
})

router.get('/:id', (req, res) => {
  console.log(req.user)
  res.send(`get user with id of ${req.params.id}`)
})

const users =[{name: 'matt'}, {name: 'jess'}]

router.param('id', (req, res, next, id) => {
  req.user = users[id]
  next()
} )


module.exports = router;