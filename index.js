const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 9090;
const userRouter = require('./src/routers/user');
require('./src/db/db');

const server = express();

server.use(express.json());
server.use(userRouter);

server.get('/', (req, res) => {
  res.send('This server is up and runnging.');
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
