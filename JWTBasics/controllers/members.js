const Members = require("../models/Members");

const addMember = async (req, res) => {
  const conversation = req.params.conversationId;
  const { user, roles } = req.body.user;

  Members.find({ conversation, user }).exec((err, data) => {
    if (err) res.status(400).json(err);
    if (data.length === 0) {
      let member = new Members();
      member.conversation = conversation;
      member.user = user;
      member.roles = roles ? roles : "1";
      member.save((err, result) => {
        if (err) res.status(400).json(err);
        res.status(200).json(result);
      });
    } else {
      res.status(400).json({ msg: "da trong rooom" });
    }
  });
};

const getAllMember = async (req, res) => {
  const conversation = req.params.conversationId;
  Members.find({
    conversation,
  })
    .populate("user", "_id username")
    .select("_id conversation user roles createdAt updatedAt")
    .exec((err, data) => {
      if (err) res.status(400).json(err);

      res.status(200).json(data);
    });
};
module.exports = {
  addMember,
  getAllMember,
};
