const express = require("express");
const BlogsController = require("../controllers/BlogsController");
const router = express.Router();
const TokenVerifyMiddleware = require("../middleware/TokenVerifyMiddleware");
const TokenIssueController = require("../controllers/TokenIssueController");

// API Routing End Point
router.post("/tokenIssue", TokenIssueController.CreateToken);
//create
router.post("/createPost", TokenVerifyMiddleware, BlogsController.createPost);

//read
router.get("/readPost", BlogsController.readPost);
//BlogsController.readPost

//readOne
router.get("/readOnePost/:id", BlogsController.readOnePost);

//update
router.post(
  "/updatePost/:id",
  TokenVerifyMiddleware,
  BlogsController.updatePost
);

//delete
router.post(
  "/deletePost/:id",
  TokenVerifyMiddleware,
  BlogsController.deletePost
);

// jwt create token
router.post("/createToeken", jwt.createToeken);

//jwt decode token
router.post("/decodeToeken", jwt.decodeToeken);

module.exports = router;
