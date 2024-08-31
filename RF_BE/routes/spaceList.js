const { Router } = require("express");
const {
  createSpaceList,
  getUserSpaceLists,
  deleteUserSpaceList,
  getUserSingleSpaceList,
  editUserSpaceList,
  getAllSpaceList,
} = require("../controllers/spaceListController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = Router();

router.post("/list-your-space", authMiddleware, createSpaceList);
router
  .get("/space-owner/:id", authMiddleware, getUserSingleSpaceList)
  .post("/space-owner/edit/:id", authMiddleware, editUserSpaceList)
  .post("/space-owner", authMiddleware, getUserSpaceLists)
  .delete("/space-owner/:id", authMiddleware, deleteUserSpaceList)
  .post("/spaces", getAllSpaceList);

module.exports = router;
