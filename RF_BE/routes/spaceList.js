const { Router } = require("express");
const {
  createSpaceList,
  getUserSpaceList,
} = require("../controllers/spaceListController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = Router();

router.post("/list-your-space", authMiddleware, createSpaceList);
router.post("/space-owner", authMiddleware, getUserSpaceList);

module.exports = router;
