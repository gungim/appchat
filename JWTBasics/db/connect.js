const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose
    .connect(url)
    .then(() => console.log("Connect to the db..."))
    .catch((e) => console.log(e));
};

module.exports = connectDB;
