const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signupUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // no duplicates
    const exists = await User.findOne({ username });
    if (exists)
      return res.status(400).json({ error: "Username already exists!" });

    // hashing our password
    const hashedPassword = await bcrypt.hash(password, 10);

    // creating the user
    const newUser = await User.create({
      username,
      password: hashedPassword,
    });

    // response if no error
    res.status(201).json({ newUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  // if user doesn't exist, they can't login
  const { username, password } = req.body;

  try {
    const exists = await User.findOne({ username });
    if (!exists) return res.status(404).json({ error: "Username not found." });

    const isPasswordMatched = await bcrypt.compare(password, exists.password);

    if (!isPasswordMatched)
      return res.status(400).json({ error: "Incorrect password." });

    const token = jwt.sign({ userId: exists._id }, process.env.JWT_SECRET);
    res.status(200).json({ username, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signupUser, loginUser };
