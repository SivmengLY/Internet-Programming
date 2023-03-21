const controller = require("./controller")
const express = require('express')
const app = express()
const port = 3000

var bodyParser = require('body-parser')
var fs = require('fs')

app.use(require('cors')())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/register', (req, res) => {

    const user = {
        email: req.body.email,
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname, 
        password: req.body.password
    }

    controller.checkUser(user.email).then((c) => {
      if (c){
        return res.json({message: "This user is exist in database"})
      }else{
        controller.readUser(user)
        return res.json({message: "Register successfully"})
      }
    })


})

app.post('/login', (req, res) => {

  const user = {
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  }

  controller.veryfyUser(user.email, user.username, user.password).then((c) => {
    if (c){
      return res.status(200).json({message: "Login success"})
    }else{
      return res.status(201).json({message: "Login fail"})
    }
  })

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})