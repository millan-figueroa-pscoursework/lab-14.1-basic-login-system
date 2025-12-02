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

async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    // check for email + password in body
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required." });
    }

    // find user by email
    const user = await User.findOne({ email });
    if (!user) {
      // don't reveal if it's email or password that’s wrong
      return res.status(400).json({ message: "Invalid email or password." });
    }

    // compare passwords using our schema method
    const isMatch = await user.isCorrectPassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    // if OK, send back user info (no password)
    return res.status(200).json({
      message: "Login successful.",
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({
      message: "Error logging in.",
      error: err.message, // fine for debugging
    });
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  registerUser,
  loginUser,
};
