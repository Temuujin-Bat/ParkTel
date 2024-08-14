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

module.exports = { createSpaceList };
