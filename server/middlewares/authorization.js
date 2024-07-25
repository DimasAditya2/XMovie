const {Movie} = require('../models/index')
async function authorization(req, res, next) {
    try {
        const {id} = req.params
        const movie = await Movie.findByPk(id)

        if(!movie) {
            throw {name: 'DataNotFound'}
        }

        if(req.user.role === 'Admin') {
            next()
        } else if (req.user.role === 'Staff' && req.user.id === cuisine.authorId) {
            console.log(req.user.id, cuisine.authorId);
            next()
        } else {
            throw {name: "FORBIDDEN"}
        }
    } catch (error) {
        next(error)
    }
}

module.exports = authorization