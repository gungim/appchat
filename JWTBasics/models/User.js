const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "must provide name"],
      trim: true,
    },
    avatar: {
      data: Buffer,
      contentType: String,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: [6, "pass word can not be more than 6 characters"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    friends: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
