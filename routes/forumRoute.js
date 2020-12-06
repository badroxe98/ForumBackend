const express=require("express");
const router=express.Router();
const ForumController=require("../controllers/forumController");

router.get("/forums", ForumController.getForums);
router.post("/forums",ForumController.addForum);
router.get("/forums/:forumId",ForumController.getForumById);
//router.put("/forums/:forumId",ForumController.updateForum);
router.delete("/forums/:forumId",ForumController.deleteForum);

module.exports = router;
