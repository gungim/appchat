const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  getTask,
  deleteTask,
  updateTask,
  createTask,
} = require("../controllers/task");
const authenticationMiddleware = require("../middleware/auth");

router
  .route("/tasks")
  .get(authenticationMiddleware, getAllTasks)
  .post(authenticationMiddleware, createTask);
router
  .route("/tasks/:id")
  .get(authenticationMiddleware, getTask)
  .patch(authenticationMiddleware, updateTask)
  .delete(authenticationMiddleware, deleteTask);

module.exports = router;
