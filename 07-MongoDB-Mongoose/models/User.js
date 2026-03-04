const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  age: { type: Number, min: 18, required: true }
});

// Hook (pre-save) - NO next()
userSchema.pre("save", function () {
  console.log("Saving user...");
});

module.exports = mongoose.model("User", userSchema);