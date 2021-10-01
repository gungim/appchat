const Conversation = require("../models/Conversation");
const { BadRequestError } = require("../errors");

const createConversation = async (req, res) => {
  const newConversation = new Conversation({
    members: [req.body.senderId, req.body.receiverId],
  });
  try {
    const savedConversation = await newConversation.save();
    res.status(200).json({ savedConversation });
  } catch (e) {
    /* handle error */
    res.status(500).json(e);
  }
};

const getConversation = async (req, res) => {
  try {
    const conversation = await Conversation.find({
      members: { $in: [req.params.id] },
    });
    res.status(200).json(conversation);
  } catch (e) {
    res.status(500).json(e);
  }
};
const getTwoUser = async (req, res) => {
  try {
    const conversation = await Conversation.findOne({
      members: { $all: [req.params.firstUserId, req.params.secondUserId] },
    });
    res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json(err);
  }
};
module.exports = { createConversation, getConversation, getTwoUser };
