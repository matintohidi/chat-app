const usersController = require("../controllers/usersController");
const authMiddlewares = require("../middlewares/authMiddlewares");
const multer = require("multer");

const router = require("express").Router();

router.post("/" , authMiddlewares.checkUser);
router.post("/register" , usersController.register);
router.post("/login" , usersController.login);
router.put("/setprofile" , usersController.uploadUserProfile , usersController.resizeUserPhoto , usersController.setProfile);

module.exports = router;