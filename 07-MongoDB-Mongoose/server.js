const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const User = require("./models/User");

// MongoDB Atlas connection
mongoose.connect("mongodb+srv://raghavendrat540_db_user:M4kHUK6DoedPfCWG@cluster0.lovtkki.mongodb.net/trainingDB?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log("Mongo Error:", err));

// Simple home route
app.get("/", (req, res) => {
  res.send("MongoDB + Mongoose Server Running");
});

// CREATE user
app.post("/users", async (req, res) => {
  try {
    console.log("Request Body:", req.body);

    const user = new User(req.body);
    const savedUser = await user.save();

    res.status(201).json({
      message: "User created successfully",
      user: savedUser
    });

  } catch (error) {
    console.log("SAVE ERROR:", error.message);

    res.status(400).json({
      error: error.message
    });
  }
});

// READ all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE user
app.put("/users/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE user
app.delete("/users/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.json({
      message: "User deleted successfully"
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});