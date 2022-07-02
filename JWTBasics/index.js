require("dotenv").config();
require("express-async-errors");

const express = require("express");

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const channelRouter = require("./routes/channel");
const guildsRouter = require("./routes/guilds");
const messagesRouter = require("./routes/messages");
const memberRouter = require("./routes/members");
const friendRouter = require("./routes/friend");
const connectDB = require("./db/connect");
const cors = require("cors");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("./public"));
app.use(express.json({ limit: "10mb" }));
app.use(cors());

app.use("/api/v1", authRouter);
app.use("/api/v1", guildsRouter);
app.use("/api/v1", messagesRouter);
app.use("/api/v1", userRouter);
app.use("/api/v1", channelRouter);
app.use("/api/v1", memberRouter);
app.use("/api/v1", friendRouter);
app.use(notFoundMiddleware);
// app.use(errorHandlerMiddleware);

const port = process.env.PORT || 8080;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`app started on port ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
