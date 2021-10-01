const User = require("../models/User");
const { BadRequestError } = require("../errors");

const getFriends = async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await User.findById(userId);
    const friends = await Promise.all(
      user.friends.map((friendId) => {
        return User.findById(friendId);
      })
    );
    const listFriend = [];
    friends.map((friend) => {
      const { _id, username } = friend;
      listFriend.push({ _id, username });
    });
    res.status(200).json(listFriend);
  } catch (e) {
    /* handle error */
    throw new BadRequestError(e);
  }
};

const addFriend = async (req, res) => {
  const friendId = req.params.userId;
  const userId = req.user.id;
  try {
    const user = await User.findById(userId);
    const currentUser = await User.findById(friendId);
    if (!user.friends.includes(req.user.id)) {
      await user.updateOne({ $push: { friends: req.params.userId } });
      await currentUser.updateOne({ $push: { friends: req.user.id } });
      res.status(200).json("user has been followed");
    } else {
      res.status(403).json("you allready follow this user");
    }
  } catch (e) {
    throw new BadRequestError(e);
  }
};

const getUser = async (req, res) => {
  const userId = req.query.userId;
  const username = req.query.username;
  try {
    const user = userId
      ? await User.findById(userId)
      : await User.findOne({ username: username });
    res.status(200).json(user);
  } catch (e) {
    throw new BadRequestError(e);
  }
};

module.exports = { getFriends, addFriend, getUser };
