const mongoose = require("mongoose");

const MembersSchema = mongoose.Schema(
  {
    conversation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Conversation",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    roles: {
      type: Array,
      default: [0],
    },
  },

  {
    timestamps: true,
  }
);

// 1: default roles
// 0: admin roles

module.exports = mongoose.model("Members", MembersSchema);
