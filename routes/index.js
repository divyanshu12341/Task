const { addUser,getAllUsers,getUser} = require("../controllers/userController.js");
const express = require("express");
const router = express.Router();
router.post("/add", addUser);
router.get('/users',getAllUsers);
router.get('/users/:id',getUser);;
module.exports = router;
