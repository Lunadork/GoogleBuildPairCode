const express = require('express')
const server = express()
const cors = require('cors');
const bodyParser = require ('body-parser');
const port = 3000;
server.use(cors());

const resultRoutes = require("./controller/searchController.js")
server.use('/',resultRoutes)

server.listen(port, () => console.log("Server should be listening on port " + port + " now"));