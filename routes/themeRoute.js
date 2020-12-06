let express = require("express");
let router = express.Router();
let themeController = require("../controllers/themeController");

router.get("/themes", themeController.getThemes);
router.post("/themes", themeController.addTheme);
router.get("/themes/:themeId", themeController.getThemeById);
router.put("/themes/:themeId", themeController.modifyTheme);
router.delete("/themes/:themeId", themeController.deleteTheme);

module.exports = router;