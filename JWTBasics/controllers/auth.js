const { BadRequestError } = require("../errors");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// dang ki
const register = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new BadRequestError("Please provide username or password");
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const currentUser = await User.findOne({ username: username });
    if (!currentUser) {
      const newUser = new User({
        username: username,
        password: hashedPassword,
      });

      const user = await newUser.save();
      res.status(200).json(user);
    }
    res.status(404).json({ msg: "ten dang nhap ton tai" });
  } catch (e) {
    throw new BadRequestError(e);
  }
};

// dang nhap
const signin = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new BadRequestError("Khong duoc de trong tai khoan hoac mat khau");
  }
  try {
    const user = await User.findOne({ username });
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).json("wrong password");
    const id = user._id;
    // JWT_SECRET
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    res.status(200).json({ user, token });
  } catch (e) {
    /* handle error */
    throw new BadRequestError("Tai khoan khong ton tai");
  }
};

module.exports = { signin, register };
