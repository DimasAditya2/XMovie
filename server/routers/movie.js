const express = require('express')
const MovieController = require('../controller/movieController')
const authentication = require('../middlewares/authentication')
const movie = express.Router()

movie.get('/movies', MovieController.getMovie)
movie.post('/movies', authentication, MovieController.addMovie)
movie.get('/movies/:id', MovieController.getMovieById)
movie.put('/movies/:id', authentication, MovieController.updateMovie)
movie.delete('/movies/:id', authentication, MovieController.deleteMovie)


module.exports = movie