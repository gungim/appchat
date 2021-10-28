const Conversation = require("../models/Conversation");
const queryString = require("query-string");
const Members = require("../models/Members");
const formidable = require("formidable");
const fs = require("fs");
const Channel = require("../models/Channel");

const createConversation = async (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json(err);
    }

    const { name, admin, description, category } = fields;
    let newConversation = new Conversation();
    newConversation.name = name;
    newConversation.admin = admin;
    newConversation.description = description;
    newConversation.category = category;
    if (files.avatar) {
      if (files.avatar.size > 10000000) {
        return res.status(400).json({
          err: "Image should be less then 1mb in size",
        });
      }
      newConversation.avatar.data = fs.readFileSync(files.avatar.path);
      newConversation.avatar.contentType = files.avatar.type;
    }

    newConversation.save((err, result) => {
      if (err) {
        return res.status(400).json({ err });
      }
      Members.create({
        conversation: result._id,
        user: admin,
        roles: "0",
      });
      res.status(200).json(result);
    });
  });
};

const getAllConversation = async (req, res) => {
  const user = req.query.userId;

  const conver = await Members.find({ user })
    .populate("conversation", "_id name admin createdAt updatedAt")
    .select("conversation");

  const b = await Promise.all(
    conver.map(async (c) => {
      const mb = await Channel.findOne({ conversation: c.conversation._id });

      return { conversation: c.conversation, selectedChannel: mb };
    })
  );
  console.log(b);
  res.send("msg");

  // Members.find({
  // user,
  // })
  // .populate("conversation", "_id name admin createdAt updatedAt")
  // .select("conversation")
  // .exec((err, results) => {
  // if (err) res.status(400).json(err);
  // const conver = results;

  // const c = conver.map((e) => {
  // return e.conversation;
  // });

  // res.status(200).json(c);
  // });
};

const getConversation = async (req, res) => {
  const id = req.params.id;
  Conversation.findById(id)
    .select("_id name admin createdAt updatedAt")
    .exec((err, data) => {
      if (err) res.status(400).json(err);
      res.status(200).json(data);
    });
};

const searchConversation = async (req, res) => {
  const query = req.query;
  const limit = query.limit ? query.limit : 12;
  const offset = query.offset ? query.offset : 0;
  const key = query.query;
  try {
    const titleRegex = new RegExp(key, "i");
    const conversations = await Conversation.find({
      title: titleRegex,
    })
      .limit(parseInt(limit))
      .skip(parseInt(offset))
      .exec();
    const count = await Conversation.count({ title: titleRegex });
    res.status(200).json({ conversations, count });
  } catch (e) {
    res.status(400).json(e);
  }
};
const avatar = (req, res) => {
  const _id = req.params.id.toLowerCase();
  Conversation.findOne({ _id }).exec((err, data) => {
    if (err || !data) {
      res.status(400).json(err);
    }

    res.set("Content-Type", data.avatar.contentType);
    return res.send(data.avatar.data);
  });
};

module.exports = {
  createConversation,
  getConversation,
  getAllConversation,
  searchConversation,
  avatar,
};
