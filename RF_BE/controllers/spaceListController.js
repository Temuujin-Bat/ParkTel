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

    return res.status(201).json(spaces);
  } catch (error) {
    console.error("Error during getting a list:", error);
    return res
      .status(500)
      .json({ error: "Error inside spaceListController.js/getList" });
  }
};

const deleteUserSpaceList = async (req, res) => {
  try {
    const { id } = req.params;

    const spaceList = await SpaceList.findById(id);

    if (!spaceList) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ msg: `No space list with id: ${id}` });
    }

    await SpaceList.findByIdAndDelete(id);

    const updatedSpaceList = await SpaceList.find({ user: req.user.userID });

    return res
      .status(200)
      .json({ msg: "Space list deleted successfully!", updatedSpaceList });
  } catch (error) {
    console.error("Error during deleting a list:", error);
    return res
      .status(500)
      .json({ error: "Error inside spaceListController.js/deleteList" });
  }
};

const editUserSpaceList = async (req, res) => {
  try {
    const { id } = req.params;

    const spaceList = await SpaceList.findById(id);

    if (!spaceList) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ msg: `No space list with id: ${id}` });
    }

    await SpaceList.findByIdAndUpdate(id);

    const updatedSpaceList = await SpaceList.find({ user: req.user.userID });

    return res
      .status(200)
      .json({ msg: "Space list edited successfully!", updatedSpaceList });
  } catch (error) {
    console.error("Error during editing a list:", error);
    return res
      .status(500)
      .json({ error: "Error inside spaceListController.js/editList" });
  }
};

module.exports = {
  createSpaceList,
  getUserSpaceList,
  deleteUserSpaceList,
  editUserSpaceList,
};
