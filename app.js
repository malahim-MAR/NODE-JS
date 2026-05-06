// Testing Express Setup
// const express = require("express");
// const app = express();

// // this tells express to automatically parse JSON bodies
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Welcome to my app");
// });

// app.post("/users", (req, res) => {
//   const user = req.body;
//   console.log("Received:", user);
//   res.status(201).json({ message: "User created", user });
// });

// app.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });

// Creating First EVER API

const express = require("express");

const app = express();

app.use(express.json());

let users = [
  { id: 1, name: "Malahim", age: 19, role: "Web development" },
  { id: 2, name: "Abdul Rehman", age: 22, role: "Mobile App development" },
];
app.get("/", (req, res) => {
  res.send("Welcome to my app");
});

app.get("/users", (req, res) => {
  res.status(200).json(users);
});

app.get("/users/:id", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ message: "user not found" });
  }
  res.status(200).json(user);
});

app.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
});
