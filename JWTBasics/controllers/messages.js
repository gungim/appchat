const Message = require("../models/Message");
const User = require("../models/User");

const newMess = async (req, res) => {
  const message = req.body;
  try {
    const newMessage = new Message(message);

    const savedNewMessage = await newMessage.save();
    return res.json(savedNewMessage);
  } catch (error) {
    throw new Error(error);
  }
};

const getMessages = async (req, res) => {
  const channel = req.params.channelId;
  const limit = 20;
  const page = req.query.page ? parseInt(req.query.page) : 0;
  try {
    const messageList = await Message.find({
      channel: channel,
    })
      .populate("user", "_id username")
      .populate("replyId", "_id username")
      .limit(limit)
      .skip(limit * page)
      .sort({ createdAt: "desc" });

    return res.json(messageList);
  } catch (error) {
    throw new Error(error);
  }
};

const getMessage = async (req, res) => {
  const _id = req.query.id;
  Message.findById({ _id }).exec((err, results) => {
    if (err) res.status(400).json(err);

    res.status(200).json(results);
  });
};

// .sort({ createdAt: -1 });
module.exports = { newMess, getMessages, getMessage };
