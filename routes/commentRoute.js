let express = require("express");
let router = express.Router();
let commentController =  require("../controllers/commentController");

router.get("/comments/posts/:postId", commentController.getCommentsByPostId);
router.get("/comments/users/:userId", commentController.getCommentsByUserId);
router.get("/comments/:commentId", commentController.getCommentById);
router.get("/comments:userId", commentController.getComments);
router.post("/comments", commentController.addComment);
router.delete("/comments/:commentId", commentController.deleteComment);
router.put("/comments/:commentId", commentController.modifyComment);

module.exports = router;