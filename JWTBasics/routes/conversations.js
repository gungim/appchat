const {
  createConversation,
  getConversation,
  getTwoUser,
} = require("../controllers/conversations");

const router = require("express").Router();

router.route("/conversation").post(createConversation);
router.route("/conversation/:id").get(getConversation);
router.route("/conversation/:firstUserId/:secondUserId").get(getTwoUser);

module.exports = router;
