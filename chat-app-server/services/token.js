const jwt = require("jsonwebtoken");

const createToken = (id , expiresIn = "60d" , key = "35Pl7ZGA") => {
    return jwt.sign(
        { id },
        key,
        {
            expiresIn
        }
    )
}

module.exports = { createToken };
