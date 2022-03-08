const Message = require("../models/Message");
const User = require("../models/User");

const newMess = async (req, res) => {
  const newMessage = new Message(req.body);
  console.log(newMessage);
  newMessage.save((err, result) => {
    if (err) res.status(400).json(err);
    const m = result;
    User.findById(result.user)
      .select("_id username")
      .exec((e, data) => {
        if (e) res.status(200).json(e);
        m["user"] = data;
        res.status(200).json(m);
      });
  });
};

const getMessages = async (req, res) => {
  const channel = req.params.channelId;
  const limit = 20;
  const page = req.query.page ? parseInt(req.query.page) : 0;
  Message.find({
    channel,
  })
    .populate("user", "_id username")
    .populate("replyId", "_id username")
    .select("_id user text channel like createdAt updatedAt replyId")
    .limit(limit)
    .skip(limit * page)
    .sort({ createdAt: "desc" })
    .exec((err, results) => {
      if (err) res.status(400).json(err);
      res.status(200).json(results);
    });
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
