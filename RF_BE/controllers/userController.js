const User = require("../models/User");

const getProfile = async (req, res) => {
  try {
    const userID = req.user.userID;

    const user = await User.findById({ _id: userID });

    if (!user) {
      return res.status(404).json({ success: false, msg: "User not found" });
    }

    return res.status(201).json(user);
  } catch (error) {
    console.error("Error during getting profile:", error);
    return res
      .status(500)
      .json({ error: "Error inside userController.js/getProfile" });
  }
};

const editProfile = async (req, res) => {
  try {
    const { firstName, lastName, email, mobile } = req.body;
    const userID = req.user.userID;

    const user = await User.findById(userID);

    if (!user) {
      return res.status(404).json({ success: false, msg: "User not found" });
    }

    await User.findByIdAndUpdate(
      { _id: user._id },
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        mobile: mobile,
      }
    );

    return res.status(201).json({
      success: true,
      data: {
        userID: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        mobile: user.mobile,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Error during editing profile:", error);
    return res
      .status(500)
      .json({ error: "Error inside userController.js/editProfile" });
  }
};

module.exports = { getProfile, editProfile };
