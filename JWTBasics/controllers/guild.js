const Guild = require("../models/Guild");
const queryString = require("query-string");
const Members = require("../models/Members");
const formidable = require("formidable");
const fs = require("fs");
const Channel = require("../models/Channel");

const createGuild = async (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json(err);
    }

    const { name, admin, description, category } = fields;
    let newGuild = new Guild();
    newGuild.name = name;
    newGuild.description = description;
    newGuild.category = category;
    if (files.avatar) {
      if (files.avatar.size > 10000000) {
        return res.status(400).json({
          err: "Image should be less then 1mb in size",
        });
      }
      newGuild.avatar.data = fs.readFileSync(files.avatar.path);
      newGuild.avatar.contentType = files.avatar.type;
    }

    newGuild.save((err, result) => {
      if (err) {
        return res.status(400).json({ err });
      }
      Members.create({
        guild: result._id,
        user: admin,
        roles: "0",
      });
      res.status(200).json(result);
    });
  });
};

const getAllGuild = async (req, res) => {
  const user = req.query.userId;
  try {
    const listParticipating = await Members.find({ user });
    const guilds = await Promise.all(
      listParticipating.map(async (item) => {
        return await Guild.findOne(item.guild);
      })
    );
    return res.status(200).json(guilds);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const getGuild = async (req, res) => {
  const id = req.params.id;
  try {
    const guild = await Guild.findById(id);
    res.status(200).json(guild);
  } catch (error) {
    res.status(400).json(error);
  }
};

const searchGuild = async (req, res) => {
  const query = req.query;
  const limit = query.limit ? query.limit : 12;
  const offset = query.offset ? query.offset : 0;
  const key = query.query;
  try {
    const titleRegex = new RegExp(key, "i");
    const Guilds = await Guild.find({
      title: titleRegex,
    })
      .limit(parseInt(limit))
      .skip(parseInt(offset))
      .exec();
    const count = await Guild.count({ title: titleRegex });
    res.status(200).json({ Guilds, count });
  } catch (e) {
    res.status(400).json(e);
  }
};
const avatar = (req, res) => {
  const _id = req.params.id.toLowerCase();
  Guild.findOne({ _id }).exec((err, data) => {
    if (err || !data) {
      res.status(400).json(err);
    }

    res.set("Content-Type", data.avatar.contentType);
    return res.send(data.avatar.data);
  });
};

module.exports = {
  createGuild,
  getGuild,
  getAllGuild,
  searchGuild,
  avatar,
};
