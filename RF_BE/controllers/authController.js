const User = require("../models/User");
const { comparePasswords } = require("../utils/passwordUtils");
const { createJWT } = require("../utils/tokenUtils");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return register.status(400).json({ msg: "Insert email or password." });
    }

    const userData = await User.findOne({ email: req.body.email });

    if (!userData) {
      return res.status(401).json({ msg: "Email or password incorrect." });
    }

    const isPasswordCorrect = await comparePasswords(
      req.body.password,
      userData.password
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({ msg: "Email or password is incorrect!" });
    }

    const token = createJWT({ userID: userData._id, name: userData.firstName });

    const oneDay = 1000 * 60 * 60 * 24;

    res.cookie("token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + oneDay),
      secure: true,
    });

    const user = {
      userID: userData._id,
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
    };

    return res.status(200).json({ msg: "User logged in", token, user });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error inside authController.js/login" });
  }
};

module.exports = { login };
