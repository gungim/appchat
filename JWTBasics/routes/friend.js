const router = require("express").Router();
const {
  getFriends,
  sendFriendRequest,
  acceptFriendRequest,
  getAllRequest,
  deleteFriendRequest,
  getAllSendRequest,
  deleteFriend,
} = require("../controllers/friend.js");
const authenticationMiddleware = require("../middleware/auth.js");

// router.route("/friends/:id").post(authenticationMiddleware, addFriend);

router.route("/friends").get(authenticationMiddleware, getFriends);

// handle request
router.route("/friends/r").get(authenticationMiddleware, getAllSendRequest);
router
  .route("/friends/r/:id")
  .post(authenticationMiddleware, sendFriendRequest)
  .patch(authenticationMiddleware, acceptFriendRequest)
  .delete(authenticationMiddleware, deleteFriendRequest);
router.route("/friends/y").get(authenticationMiddleware, getAllRequest);

// handle friend
router.route("/friends/f/:id").post(authenticationMiddleware, deleteFriend);

module.exports = router;
