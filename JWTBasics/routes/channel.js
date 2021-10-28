const express = require("express");
const {
  getAllChannel,
  createChannel,
  updateChannel,
  deleteChannel,
  getdefaultChannel,
} = require("../controllers/channel");
const router = express.Router();

router.route("/channels").get(getAllChannel).post(createChannel);
router.route("/channels/:id").patch(updateChannel).delete(deleteChannel);
router.route("/default-channel/:id").get(getdefaultChannel);

module.exports = router;
