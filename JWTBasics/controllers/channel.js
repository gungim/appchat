const Channel = require("../models/Channel");
const Message = require("../models/Message");

const getAllChannel = async (req, res) => {
  const guild = req.query.guildId;
  try {
    const channels = await Channel.find({
      guild,
    });
    res.status(200).json(channels);
  } catch (e) {
    res.status(400).json({ e });
  }
};

const createChannel = async (req, res) => {
  const channel = req.body;
  const newChannel = new Channel({
    name: channel.name,
    guild: channel.guild,
    channelType: channel.channelType,
  });
  try {
    newChannel.save((err, results) => {
      if (err) res.status(400).json(err);
      if (results.channelType === "chat") {
        const defaultsMessage = new Message({
          channel: results._id,
          text: `<h1>Chào mừng bạn đến với ${results.name}</h1>`,
        });

        defaultsMessage.save((err, dfMessage) => {
          if (err) res.status(400).json(err);

          res.status(200).json({ results, dfMessage });
        });
      }
      res.status(200).json({ results });
    });
  } catch (e) {
    res.status(400).json(e);
  }
};

const updateChannel = async (req, res) => {
  const channel = req.body;
  try {
    const updatedChannel = await Channel.findByIdAndUpdate(
      channel._id,
      channel,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json(updatedChannel);
  } catch (e) {
    res.status(400).json(e);
  }
};

const deleteChannel = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedChannel = await Channel.findByIdAndDelete({ _id: id });

    res.status(200).json(deletedChannel);
  } catch (e) {
    /* handle error */
    res.status(400).json(e);
  }
};

const getdefaultChannel = async (req, res) => {
  const guild = req.params.id;
  Channel.findOne({ guild })
    .select("_id")
    .exec((err, data) => {
      if (err) res.status(400).json(err);
      if (data) res.send(data);
    });
};

module.exports = {
  getAllChannel,
  createChannel,
  updateChannel,
  deleteChannel,
  getdefaultChannel,
};
