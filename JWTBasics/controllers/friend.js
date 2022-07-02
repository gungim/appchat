const User = require("../models/User");
const Friend = require("../models/Friend");
const { BadRequestError } = require("../errors");

const getFriends = async (req, res) => {
  const id = req.user.id;

  try {
    let friendList = await User.findById(id).select("friends");
    friendList = await Promise.all(
      friendList.friends.map(async (f) => {
        return await User.findById(f).select("_id username isAdmin");
      })
    );

    res.status(200).json(friendList);
  } catch (e) {
    /* handle error */
    throw new BadRequestError(e);
  }
};

const sendFriendRequest = async (req, res) => {
  const userId = req.user.id;
  const friendId = req.params.id;

  try {
    const user = await User.findById(userId);
    const friend = await User.findById(friendId);

    if (!user || !friend) throw new Error("Tai khoan khong ton tai");

    const sendRequest = await Friend.findOneAndUpdate(
      { requester: userId, recipient: friendId },
      { $set: { status: 1 } },
      { upsert: true, new: true }
    );
    res.status(200).json(sendRequest);
  } catch (error) {
    throw new Error(error);
  }
};

const acceptFriendRequest = async (req, res) => {
  const id = req.params.id;
  const userId = req.user.id;
  try {
    const acceptRequest = await Friend.findOneAndUpdate(
      { _id: id, recipient: userId },
      {
        $set: { status: 3 },
      }
    );

    const doc1 = await User.findByIdAndUpdate(
      { _id: acceptRequest.requester },
      {
        $push: { friends: acceptRequest.recipient },
      }
    );
    const doc2 = await User.findByIdAndUpdate(
      { _id: acceptRequest.recipient },
      {
        $push: { friends: acceptRequest.requester },
      }
    );

    res.json({ acceptRequest, doc1, doc2 });
  } catch (error) {
    throw new Error(error);
  }
};

const deleteFriendRequest = async (req, res) => {
  const id = req.params.id;
  try {
    const request = await Friend.findByIdAndUpdate(
      { _id: id },
      {
        $set: { status: 0 },
      }
    );

    res.json(request);
  } catch (error) {
    throw new Error(error);
  }
};

const getAllSendRequest = async (req, res) => {
  const id = req.user.id;
  try {
    const request = await Friend.find({ requester: id, status: 1 });
    res.json(request);
  } catch (error) {
    throw new Error(error);
  }
};

const getAllRequest = async (req, res) => {
  const id = req.user.id;
  try {
    const request = await Friend.find({ recipient: id, status: 1 });
    res.json(request);
  } catch (error) {
    throw new Error(error);
  }
};

const deleteFriend = async (req, res) => {
  const id = req.user.id;
  const friendId = req.params.id;
  try {
    const deleteF = await User.findByIdAndUpdate(
      { _id: id },
      {
        $pop: { friends: friendId },
      }
    );

    res.json(deleteF);
  } catch (error) {
    throw new Error(error);
  }
};

const searchById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findOne({ id: id });
    return res.json(user);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getFriends,
  searchById,
  sendFriendRequest,
  acceptFriendRequest,
  getAllSendRequest,
  getAllRequest,
  deleteFriendRequest,
  deleteFriend,
};
