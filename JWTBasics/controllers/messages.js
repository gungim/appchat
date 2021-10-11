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
    const limit = 20;
    const page = req.query.page ? req.query.page : 0;
    console.log(page);
    const messages = await Message.find({
      conversationId: req.params.conversationId,
    })
      .limit(limit)
      .skip(5 * page)
      .sort({ createdAt: "desc" });
    res.status(200).json(messages);
  } catch (e) {
    res.status(500).json(e);
  }
};

// .sort({ createdAt: -1 });
module.exports = { newMess, getMess };
