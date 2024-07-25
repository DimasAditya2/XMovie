const express = require('express')
const UserController = require('../controller/userController')
const user = express.Router()

user.post('/login', UserController.userLogin)
user.post('/register', UserController.userRegister)
user.post('/login-google', UserController.loginByGoogle)

module.exports = user