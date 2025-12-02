const User = require("../models/User");

function getAllUsers(req, res) {
  res.send("Sending all users...");
}

function getUserById(req, res) {
  res.send(`Data for user: ${req.params.id}`);
}

// POST /api/user/register
async function registerUser(req, res) {
  try {
    const { username, email, password } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    // Create and save new user
    const newUser = await User.create({ username, email, password });

    // Send response without password
    res.status(201).json({
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
    });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({
      message: "Error registering user.",
      error: err.message, // temporary so we can see what's wrong
    });
  }
}

function loginUser(req, res) {
  res.send(`Data for user: ${req.params.id}`);
}

module.exports = {
  getAllUsers,
  getUserById,
  registerUser,
  loginUser,
};
