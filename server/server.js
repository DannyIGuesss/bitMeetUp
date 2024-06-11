require("dotenv").config();
const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const db = require("./config/mysql.config");

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
