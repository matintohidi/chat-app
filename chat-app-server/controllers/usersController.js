const { User } = require("../models");
const sharp = require("sharp");
const jwt = require("jsonwebtoken");
const brcypt = require("bcrypt");
const multer = require("multer");
const { createToken } = require("../services/token");

// profile upload
const multerStorage = multer.memoryStorage();
const multerFilter = (req , file , cb) => {
    if(file.mimetype.startsWith("image")) {
        cb(null , true);
    } else {
        cb(null , false);
    }
}

const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
});

exports.uploadUserProfile = upload.single("profile");
exports.resizeUserPhoto = async (req , res , next) => {
    if(req.file) {
        if(req.body.id === "undefined") next();

        req.file.filename = `user-${req.body.id}.jpeg`;

        await sharp(req.file.buffer)
            .resize(500 , 500)
            .toFormat("jpeg")
            .jpeg({ quality: 90 })
            .toFile(`images/${req.file.filename}`)

        next();
    } else {
        const user = await User.findById(req.body.id);

        const token = createToken(user._id);

        return res.status(200).json({
            token,
            status: "success"
        })
    }
}
//

exports.register = async (req , res , next) => {
    try {
        const { name , email , password } = req.body;

        const emailCheck = await User.findOne({ email });
        if(emailCheck)
            return res.status(409).json({
                status: "un success",
                errors: {
                    email: "Email already exists."
                }
            })
    
        const hashPassword = await brcypt.hash(password , 10);
        const user = await User.create({
            name,
            email,
            password: hashPassword
        })
        
        const token = createToken(user._id , "setProfile" , "3m");
        
        return res.status(201).json({
            token,
            status: "success",
        })
    } catch (err) {
        next(err);
    }
}

exports.login = async (req , res , next) => {
    try {
        const { email , password } = req.body;

        const user = await User.findOne({ email });
        
        if(!user)
            return res.status(409).json({
                status: "un success",
                errors: {
                    email: "There may not be a user with this email!",
                    password: "The password maybe incorrect!"
                }
            })
        
        const isPasswordValid = await brcypt.compare(password , user.password);
        if(!isPasswordValid)
            return res.status(409).json({
                status: "un success",
                errors: {
                    email: "There may not be a user with this email!",
                    password: "The password maybe incorrect!"
                }
            })
    
        const token = createToken(user._id);

        return res.status(200).json({
            token,
            status: "success",
        })
    } catch (err) {
        next(err);
    }
}

exports.setProfile = async (req , res , next) => {
    try {
        const token = req.headers["authorization"];
        
        if(token) {
            jwt.verify(token , "setProfile" , async (err, decodedToken) => {
                if (err) {
                    return res.status(401).json({
                        status: "un success",
                        message: "Unauthorized",
                    })
                } else {
                    const user = await User.findByIdAndUpdate(decodedToken.id , { profile: req.file.filename });

                    const token = createToken(user._id);

                    return res.status(200).json({
                        token,
                        status: "success"
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