const db = require("../models");
const User = db.User;
const bcrypt = require("bcrypt");

const isValidDate = (date) => {
    const dateFormat = /^\d{4}-\d{2}-\d{2}$/;
    return dateFormat.test(date);
  };
  
const addUser = async (req, res) => {
  const { name, email, phone, address, DOB, password } = req.body;
  if (!name || !email || !phone || !address || !DOB) {
    return res.status(400).json({
      error: "Please provide all the fields",
    });
  }
  const existingEmail = await User.findOne({ where: { email: email } });
  if (existingEmail) {
    return res.status(403).json({
      error: "Email already exists",
    });
  }

  const existingPhoneNumber = await User.findOne({ where: { phone: phone } });

  if (existingPhoneNumber) {
    return res.status(403).json({
      error: "Phone Number already exists",
    });
  }

  if (!isValidDate(DOB)) {
    return res.status(400).json({
      error: "Invalid date of birth format. Please use 'YYYY-MM-DD' format.",
    });
  }

  const hashedPassword = await bcrypt.hashSync(password, 10);
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    phone,
    address,
    DOB
  });
  res.status(200).json(user);
};
module.exports = {
  addUser
};
