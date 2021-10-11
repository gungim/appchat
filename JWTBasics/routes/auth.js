const express = require("express");
const router = express.Router();

const { register, signin, updateUser } = require("../controllers/auth");
const authenticationMiddleware = require("../middleware/auth");

// router.route("/dashboard").get(authenticationMiddleware, dashboard);
router.route("/auth/login").post(signin);
router.route("/auth/register").post(register);
router.route("/auth/").patch(authenticationMiddleware, updateUser);

module.exports = router;
