const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema(
  {
    channel: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Channel",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    replyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    text: {
      type: String,
    },
    file:{
      type: String
    },
    emotions: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

// 0 message
// 1 date message
// 2 image/video
//
module.exports = mongoose.model("Message", MessageSchema);
