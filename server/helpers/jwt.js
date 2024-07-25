const jwt = require('jsonwebtoken');

module.exports = {
    createToken: (payload) => {
        const token = jwt.sign(payload, 'shhh')
        return token
    },

    verifyToken: (token) => {
        const decoded = jwt.verify(token, 'shhh')
        return decoded
    }
}