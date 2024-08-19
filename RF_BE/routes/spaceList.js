const { Router } = require("express");
const {
  createSpaceList,
  getUserSpaceList,
  deleteUserSpaceList,
} = require("../controllers/spaceListController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = Router();

router.post("/list-your-space", authMiddleware, createSpaceList);
router
  .post("/space-owner", authMiddleware, getUserSpaceList)
  .delete("/space-owner/:id", authMiddleware, deleteUserSpaceList);

module.exports = router;
