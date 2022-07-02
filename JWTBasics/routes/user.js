const router = require("express").Router();
const { getUser } = require("../controllers/user");
const authenticationMiddleware = require("../middleware/auth");

router.route("/user/:id").get(getUser);

module.exports = router;
