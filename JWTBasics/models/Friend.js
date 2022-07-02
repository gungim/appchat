const mongoose = require("mongoose");

const FriendsSchema = mongoose.Schema(
  {
    requester: { type: mongoose.Types.ObjectId, ref: "User" },
    recipient: { type: mongoose.Types.ObjectId, ref: "User" },
    status: {
      type: Number,
      enums: [
        0, //'deleted',
        1, //'requested',
        2, //'pending',
        3, //'friends'
      ],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Friend", FriendsSchema);
