const { Router } = require("express");
const {
  register,
  login,
  forgotPassword,
  resetPassword,
} = require("../controllers/authController.js");
const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

module.exports = router;
