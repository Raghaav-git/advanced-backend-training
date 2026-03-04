const express = require("express");
const app = express();

//  Built-in middleware
app.use(express.json());

//  Custom middleware (logger)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} at ${new Date().toLocaleTimeString()}`);
  next();
});

//  Custom middleware (API key check) — only for /secure routes
const apiKeyGuard = (req, res, next) => {
  const key = req.headers["x-api-key"];
  if (!key || key !== "12345") {
    return res.status(401).json({ error: "Unauthorized: Invalid API key" });
  }
  next();
};

let users = [{ id: 1, name: "Raghavendra" }];

//  Home route
app.get("/", (req, res) => {
  res.send("Day 6 Express: Routing + Middleware + Error Handling");
});

//  GET
app.get("/users", (req, res) => {
  res.json({ users });
});

// POST
app.post("/users", (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "Name is required" });

  const newUser = { id: users.length + 1, name };
  users.push(newUser);
  res.status(201).json({ message: "User created", user: newUser });
});

//  PUT
app.put("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const { name } = req.body;

  const user = users.find((u) => u.id === id);
  if (!user) return res.status(404).json({ error: "User not found" });

  if (!name) return res.status(400).json({ error: "Name is required" });

  user.name = name;
  res.json({ message: "User updated", user });
});

//  DELETE
app.delete("/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const before = users.length;
  users = users.filter((u) => u.id !== id);

  if (users.length === before) return res.status(404).json({ error: "User not found" });

  res.json({ message: "User deleted" });
});

//  Secure route (middleware demo)
app.get("/secure/data", apiKeyGuard, (req, res) => {
  res.json({ secret: "Only accessible with x-api-key: 12345" });
});

//  404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Global Error:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});
// key value x-api-key : 12345 
app.listen(5000, () => console.log("Server running: http://localhost:5000"));