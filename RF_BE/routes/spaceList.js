const { Router } = require("express");
const { createSpaceList } = require("../controllers/spaceListController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = Router();

router.post("/list-your-space", authMiddleware, createSpaceList);

module.exports = router;
