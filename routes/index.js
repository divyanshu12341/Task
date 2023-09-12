const { addUser } = require("../controllers/userController.js");
const express = require("express");
const router = express.Router();
router.post("/add", addUser);
module.exports = router;
