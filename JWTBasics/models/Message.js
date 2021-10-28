const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema(
  {
    channel: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Channel",
    },
    _sender: mongoose.Schema.Types.ObjectId,
    text: {
      type: String,
    },
    like: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Message", MessageSchema);
