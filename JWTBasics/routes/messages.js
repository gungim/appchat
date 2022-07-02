const { newMess, getMessages, getMessage } = require("../controllers/messages");

const router = require("express").Router();

router.route("/messages/:channelId").get(getMessages);
router.route("/message").get(getMessage).post(newMess);

module.exports = router;
