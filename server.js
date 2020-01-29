const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const requireDir = require("require-dir");
const app = express();


app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://demontie:demontie123@ds157390.mlab.com:57390/products", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

requireDir("./src/model");

app.use("/api", require("./src/routes"));

const port = 5000;
app.listen(port, () => {});
