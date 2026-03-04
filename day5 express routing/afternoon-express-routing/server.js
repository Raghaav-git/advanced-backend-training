const express = require("express");
const app = express();

app.use(express.json());

let users = [{ id: 1, name: "Raghavendra" }];

// HOME ROUTE
app.get("/", (req, res) => {
  res.send("Express Server Running 🚀");
});

// GET
app.get("/users", (req, res) => {
  res.json({ users });
});

// POST
app.post("/users", (req, res) => {
  const { name } = req.body;
  const newUser = { id: users.length + 1, name };
  users.push(newUser);
  res.status(201).json({ message: "User created", user: newUser });
});

// PUT
app.put("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const { name } = req.body;

  const user = users.find((u) => u.id === id);
  if (!user) return res.status(404).json({ error: "User not found" });

  user.name = name;
  res.json({ message: "User updated", user });
});

// DELETE
app.delete("/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const before = users.length;
  users = users.filter((u) => u.id !== id);

  if (users.length === before) return res.status(404).json({ error: "User not found" });

  res.json({ message: "User deleted" });
});

app.use((req, res) => res.status(404).json({ error: "Route not found" }));

app.listen(4000, () => console.log("Express server: http://localhost:4000"));