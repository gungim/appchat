const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload-image");

const {
  createConversation,
  getConversation,
  getAllConversation,
  searchConversation,
  avatar,
} = require("../controllers/conversations");
const authenticationMiddleware = require("../middleware/auth");

router.route("/conversations").post(createConversation).get(getAllConversation);
router.route("/conversations/:id").get(getConversation);
router.route("/conversations/avatar/:id").get(avatar);
router.route("/discover-guild").get(searchConversation);

module.exports = router;
