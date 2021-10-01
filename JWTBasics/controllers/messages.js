const Message = require("../models/Message");

const newMess = async (req, res) => {
  const newMessage = new Message(req.body);
  try {
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  } catch (e) {
    /* handle error */
    res.status(500).json(e);
  }
};

const getMess = async (req, res) => {
  try {
    const messages = await Message.find({
      conversationId: req.params.conversationId,
    });
    res.status(200).json(messages);
  } catch (e) {
    res.status(500).json(err);
  }
};

module.exports = { newMess, getMess };
