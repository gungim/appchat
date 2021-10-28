const router = require("express").Router();
const { getFriends, addFriend, getUser } = require("../controllers/user");
const authenticationMiddleware = require("../middleware/auth");

router
  .route("/user/friends/:userId")
  .get(authenticationMiddleware, getFriends)
  .patch(authenticationMiddleware, addFriend);
router.route("/user?").get(authenticationMiddleware, getUser);

module.exports = router;
