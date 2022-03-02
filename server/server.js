const express = require("express");
const server = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 3000;
const path = require("path");
server.use(cors());
server.use(express.static(path.join(__dirname, "client")));
server.use(express.static(path.join(__dirname, "../client")));

const resultRoutes = require("./controller/searchController.js");
server.use("/", resultRoutes);

server.listen(port, () =>
  console.log("Server should be listening on port " + port + " now")
);
