const mongoose = require("mongoose");

const GuildSchema = mongoose.Schema(
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

module.exports = mongoose.model("Guild", GuildSchema);
