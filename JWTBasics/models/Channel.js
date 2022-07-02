const mongoose = require("mongoose");

const ChannelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    guild: {
      type: mongoose.Schema.ObjectId,
      ref: "Guild",
      required: true,
    },
    channelType: {
      type: String,
      default: "void",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Channel", ChannelSchema);
