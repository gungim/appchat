const { newMess, getMessages, getMessage } = require("../controllers/messages");

const router = require("express").Router();

router.route("/messages/:channelId").post(newMess).get(getMessages);
router.route("/message").get(getMessage);

module.exports = router;
