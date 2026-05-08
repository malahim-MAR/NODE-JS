const users = [
  { id: 1, username: "Malahim", email: "malahim@gmail.com" },
  { id: 1, username: "Malahim", email: "malahim@gmail.com" },
];

const getAllUsers = (req, res) => {
  res.status(200).json({ users });
};

const getUserById = (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
};

const createUser = (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.status(201).json({ message: "User Created Successfully", user: users });
};

const updateUser = (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ message: "User Not Found" });
  }

  const { name, email } = req.body;
  if (name) user.name = name;
  if (email) user.email = email;

  res.status(200).json({ message: "User Updated Successfully", user });
};

const deleteUser = (req, res) => {
  const index = users.findIndex((user) => user.id === parseInt(req.params.id));
  if ((index = -1)) {
    return res.status(404).json({ message: "User Not Found" });
  }
  users.splice(index, 1);
  res.status(200).json({ message: "User Deleted Successfully", user: users });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
