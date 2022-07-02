const User = require("../models/User");
const { BadRequestError } = require("../errors");

const getUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await User.findById(userId);
    res.status(200).json(user);
  } catch (e) {
    throw new BadRequestError(e);
  }
};

const searchById = async (req, res) => {
  const id = req.query.userId;
};

module.exports = { getUser , searchById};
