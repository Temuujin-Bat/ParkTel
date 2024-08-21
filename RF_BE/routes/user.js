const { Router } = require("express");
const { editProfile, getProfile } = require("../controllers/userController.js");
const authMiddleware = require("../middlewares/authMiddleware.js");
const router = Router();

router.post("/get-profile", authMiddleware, getProfile);
router.post("/edit-profile", authMiddleware, editProfile);

module.exports = router;
