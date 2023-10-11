const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/server-config");

console.log("port is ", PORT);

const setupAndStartServer = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(` server running at port ${PORT}`);
  });
};

setupAndStartServer();
