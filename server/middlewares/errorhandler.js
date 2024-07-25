const errorHandler = (err, req, res, next) => {
    let message = "Internal Server Error"
    let status = 500
    // console.log(err, "<---------------");
    if( err.name === "SequelizeValidationError" || err.name === "SequelizeUniqueConstraintError"){
        message = err.errors[0].message;
        status = 400
    } else if (err.name === "UNAUTHORIZED"){
        message = "Please login first"
        status = 401
    } else if (err.name === "InvalidCredential"){
        message = "Invalid email/password"
        status = 401
    } else if(err.name === "BadRequest"){
        message = "Invalid username or password"
        status = 400
    } else if (err.name === "JsonWebTokenError"){
        message = "Invalid token"
        status = 401
    } else if(err.name === "DataNotFound"){
        message = "Error not found"
        status = 404
    } else if(err.name === "FORBIDDEN"){
        message = "You dont have access"
        status = 403
    } else if(err.name === 'EmailRequired') {
        message = 'Email is required'
        status = 400
    } else if(err.name === 'PasswordRequired') {
        message = 'Password is required'
        status = 400
    }

    res.status(status).json({
        message,
    })
}

module.exports = errorHandler