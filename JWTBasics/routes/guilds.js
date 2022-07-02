const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload-image");

const {
  createGuild,
  getGuild,
  getAllGuild,
  searchGuild,
  avatar,
} = require("../controllers/guild");
const authenticationMiddleware = require("../middleware/auth");

router.route("/guild").post(createGuild).get(getAllGuild);
router.route("/guild?userId").get(getAllGuild)
router.route("/guild/:id").get(getGuild);
router.route("/guild/avatar/:id").get(avatar);
router.route("/discover-guild").get(searchGuild);

module.exports = router;
