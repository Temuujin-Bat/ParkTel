const User = require("../models/User.js");
const { sendEmail } = require("../utils/mailUtils.js");
const { comparePasswords, hashPassword } = require("../utils/passwordUtils.js");
const { createJWT } = require("../utils/tokenUtils.js");
const crypto = require("crypto");

const logout = async (_, res) => {
  try {
    res.cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
      secure: true,
    });

    return res.status(200).json({ msg: "User logged out" });
  } catch (error) {
    console.error("Error during registration:", error);
    return res
      .status(500)
      .json({ error: "Error inside authController.js/logout" });
  }
};

const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, mobile } = req.body;

    if (!firstName || !lastName || !email || !password || !mobile) {
      return res.status(400).json({
        error: "Please provide email, password, first name, and last name",
      });
    }

    const findEmail = await User.findOne({ email });

    if (findEmail) {
      return res.status(409).json({ msg: "Email is already registered" });
    }

    const hashedPassword = await hashPassword(password);
    req.body.password = hashedPassword;

    await User.create(req.body);

    return res.status(201).json({ msg: "Registered Successfully" });
  } catch (error) {
    console.error("Error during registration:", error);
    return res
      .status(500)
      .json({ error: "Error inside authController.js/register" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return register.status(400).json({ msg: "Insert email or password." });
    }

    const userData = await User.findOne({ email: req.body.email });

    if (!userData) {
      return res.status(401).json({ msg: "Invalid email or password." });
    }

    const isPasswordCorrect = await comparePasswords(
      password,
      userData.password
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({ msg: "Email or password is incorrect!" });
    }

    const token = createJWT({
      userID: userData._id,
    });

    const oneDay = 1000 * 60 * 60 * 24;

    res.cookie("token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + oneDay),
      secure: true,
    });

    return res
      .status(200)
      .json({ msg: "User logged in", userID: userData._id });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error inside authController.js/login" });
  }
};

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ msg: "Please provide an email address." });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(200).json({
        msg: "If the email provided belongs to a user on the platform, we will email you a link to reset your password.",
      });
    }

    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
    const resetPasswordExpire = Date.now() + 5 * 60 * 1000; // 5 minutes

    user.resetPasswordToken = resetPasswordToken;
    user.resetPasswordExpire = resetPasswordExpire;

    await user.save();

    const resetUrl = `http://localhost:5173/reset-password/${resetToken}`;

    const message = `
        <h1>You have requested a password reset</h1>
        <p>Please go to this link to reset your password:</p>
        <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
    `;

    await sendEmail({
      to: user.email,
      subject: "Password Reset Request",
      text: message,
    });

    res.status(200).json({
      msg: "If the email provided belongs to a user on the platform, we will email you a link to reset your password.",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error inside authController.js/forgotPassword" });
  }
};

const resetPassword = async (req, res) => {
  try {
    const resetPasswordToken = crypto
      .createHash("sha256")
      .update(req.params.token)
      .digest("hex");

    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ msg: "Invalid or expired token." });
    }

    const hashedPassword = await hashPassword(req.body.password);

    await User.updateOne(
      { _id: user._id },
      {
        password: hashedPassword,
        resetPasswordToken: undefined,
        resetPasswordExpire: undefined,
      }
    );

    res.status(200).json({ msg: "Password reset successful." });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error inside authController.js/resetPassword" });
  }
};

const validateResetToken = async (req, res) => {
  try {
    // Hash the provided token
    const resetPasswordToken = crypto
      .createHash("sha256")
      .update(req.params.token)
      .digest("hex");

    // Find user by token and ensure the token has not expired
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    // If no user is found, the token is invalid or expired
    if (!user) {
      return res.status(400).json({ msg: "Invalid or expired token." });
    }

    // If the token is valid, respond with a success message
    res.status(200).json({ msg: "Valid token." });
  } catch (error) {
    // Handle any errors
    return res.status(500).json({ error: "Error validating reset token" });
  }
};

const changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;

    const userID = req.user.userID;

    const user = await User.findById({ _id: userID });

    if (!user) {
      return res.status(404).json({ success: false, msg: "User not found" });
    }

    const isMatch = await comparePasswords(oldPassword, user.password);

    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Old password is incorrect" });
    }

    const hashedPassword = await hashPassword(newPassword);
    user.password = hashedPassword;

    await User.updateOne(
      { _id: user._id },
      {
        password: hashedPassword,
      }
    );

    res
      .status(200)
      .json({ success: true, message: "Password updated successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error inside authController.js/changePassword" });
  }
};

module.exports = {
  logout,
  register,
  login,
  forgotPassword,
  resetPassword,
  validateResetToken,
  changePassword,
};
