let express = require("express");
let router = express.Router();
let userController = require("../controllers/userController");

router.get("/users", userController.getUsers);
router.post("/users", userController.addUser);
router.get("/users/:userId", userController.getUserById);
router.put("/users/:userId", userController.updateUser);
router.delete("/users/:userId", userController.deleteUser);

module.exports = router;