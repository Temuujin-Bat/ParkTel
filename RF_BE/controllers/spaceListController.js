const SpaceList = require("../models/SpaceList");

const createSpaceList = async (req, res) => {
  try {
    const userId = req.user.userID;

    const { title, location, description, ...otherDetails } = req.body;

    const newSpaceListData = new SpaceList({
      user: userId,
      title,
      location,
      description,
      ...otherDetails,
    });

    const newSpaceList = await SpaceList.create(newSpaceListData);

    return res.status(201).json(newSpaceList);
  } catch (error) {
    console.error("Error during creating a list:", error);
    return res
      .status(500)
      .json({ error: "Error inside spaceListController.js/createList" });
  }
};

const getUserSpaceList = async (req, res) => {
  try {
    const user = req.user.userID;

    const spaces = await SpaceList.find({ user });

    if (spaces.length === 0) {
      return res
        .status(404)
        .json({ message: "No spaces found for this user." });
    }

    return res.status(201).json(spaces);
  } catch (error) {
    console.error("Error during creating a list:", error);
    return res
      .status(500)
      .json({ error: "Error inside spaceListController.js/createList" });
  }
};

module.exports = { createSpaceList, getUserSpaceList };
