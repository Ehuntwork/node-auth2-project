const express = require("express");
const server = express();
const authRouter = require('../auth/auth-router');
const userRouter = require('../users/users-router');

server.use(express.json());
//user
server.use('/users', userRouter)
//api
server.use('/api', authRouter)
server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;