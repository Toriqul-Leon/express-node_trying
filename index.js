const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("LEON!");
});

const users = [
  { id: 1, name: "Sabana", email: "sabana@gmai.com", phone: "12345" },
  { id: 2, name: "Sabnur", email: "Sabnur@gmai.com", phone: "6789" },
  { id: 3, name: "Sahida", email: "sahida@gmai.com", phone: "10111213" },
  { id: 4, name: "Khuki", email: "khuki@gmai.com", phone: "14151617" },
  { id: 5, name: "Sayma", email: "Sayma@gmai.com", phone: "18192021" },
  { id: 6, name: "Apu", email: "apu@gmai.com", phone: "222324" },
];

app.get("/users", (req, res) => {
  res.send(users);
});
app.get("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
});

app.post("/user", (req, res) => {
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
