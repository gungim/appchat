const { addMember, getAllMember } = require("../controllers/members");

const router = require("express").Router();

router.route("/members/:conversationId").post(addMember).get(getAllMember);

module.exports = router;
