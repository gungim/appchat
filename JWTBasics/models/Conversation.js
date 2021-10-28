const mongoose = require("mongoose");

const ConversationSchema = mongoose.Schema(
  {
    avatar: {
      data: Buffer,
      contentType: String,
    },
    name: {
      type: String,
      required: true,
      minLength: 1,
    },
    description: {
      type: String,
    },
    admin: {
      type: String,
      required: true,
    },
    category: {
      type: String,
    },
    icon: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Conversation", ConversationSchema);
