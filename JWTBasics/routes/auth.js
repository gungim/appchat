const express = require("express");
const router = express.Router();

const { register, signin } = require("../controllers/auth");
const authenticationMiddleware = require("../middleware/auth");

// router.route("/dashboard").get(authenticationMiddleware, dashboard);
router.route("/login").post(signin);
router.route("/register").post(register);

module.exports = router;
