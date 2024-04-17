const { User } = require("../models");
const jwt = require("jsonwebtoken");

module.exports.checkUser = async (req, res, next) => {
    try {
        const { tokenKey } = req.body;
        const token = req.headers["authorization"];

        if (token) {
            jwt.verify(token , tokenKey ?? process.env.TOKEN_KEY , async (err, decodedToken) => {
                if (err) {
                    return res.status(401).json({
                        status: "un success",
                        message: "Unauthorized",
                    })
                } else {
                    let user = await User.findById(decodedToken.id);
                    user = user.toObject();

                    delete user.password;

                    if (user)
                        return res.status(200).json({
                            user,
                            status: "success",
                        })
                    else
                        return res.status(404).json({
                            status: "un success",
                            message: "User is not defined",
                        })
                }
            })
        } else {
            return res.status(401).json({
                status: "un success",
                message: "Unauthorized",
            })
        }
    } catch (err) {
        next(err);
    }

}
