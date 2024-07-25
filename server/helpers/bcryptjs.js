const bcrypt = require('bcryptjs');

module.exports = {
    hashPassword : (password) => {
        const hash = bcrypt.hashSync(password)
        return hash
    },

    comparePassword: (password, hash) => {
        const compare = bcrypt.compareSync(password, hash);
        return compare
    }
}