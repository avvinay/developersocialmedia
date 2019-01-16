const express = require("express");
const mongoose = require("mongoose");

var users = require("./routes/api/users");
var profile = require("./routes/api/profile");
var posts = require("./routes/api/posts");

var app = express();

//DB config
var db = require("./config/keys").mongoURI;

//Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("Mongodb Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hellodude"));

// use routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
