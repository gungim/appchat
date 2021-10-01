const Task = require("../models/Task");
const User = require("../models/User");
const { BadRequestError } = require("../errors");

const getAllTasks = async (req, res) => {
  const userId = await User.findOne({ _id: req.user.id })
    .then((user) => {
      return user._id;
    })
    .catch(() => {
      throw new BadRequestError("User khong ton tai");
    });
  await Task.find({ userId: userId })
    .then((tasks) => {
      res.status(200).json({ tasks });
    })
    .catch(() => {
      throw new BadRequestError("Task khong ton tai");
    });
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  await User.findOne({ _id: task.userId })
    .then(() => {
      res.status(200).json({ task });
    })
    .catch((e) => {
      throw new BadRequestError("User khong ton tai");
    });
};

const getTask = async (req, res) => {
  const { id: taskId } = req.params;
  await Task.findOne({ _id: taskId })
    .then((task) => {
      res.status(200).json({ task });
    })
    .catch((e) => {
      throw new BadRequestError("Task khong ton tai");
    });
};

const updateTask = async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndUpdate({ _id, taskId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    throw new BadRequestError("Task khong ton tai");
  }
  res.status(200).json({ task });
};

const deleteTask = async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskId });
  if (!task) {
    throw new BadRequestError("Task khong ton tai");
  }
  res.status(200).json({ task });
};

module.exports = {
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
  createTask,
};
