const jwt = require("jsonwebtoken");

const createToken = (id , key = process.env.TOKEN_KEY , expiresIn = "60d") => {
    return jwt.sign(
        { id },
        key,
        {
            expiresIn
        }
    )
}

module.exports = { createToken };
