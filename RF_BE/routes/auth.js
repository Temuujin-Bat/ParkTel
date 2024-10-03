const { Router } = require("express");
const {
  register,
  login,
  forgotPassword,
  resetPassword,
  validateResetToken,
  changePassword,
  logout,
} = require("../controllers/authController.js");
const authMiddleware = require("../middlewares/authMiddleware.js");
const router = Router();

router.post("/logout", logout);
router.post("/register", register);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);
router.post("/validate-reset-token/:token", validateResetToken);
router.post("/change-password", authMiddleware, changePassword);

module.exports = router;
