const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const dbURL = config.get('dbURL');
const port = process.env.PORT || 5000;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(port))
  .catch((err) => console.log(err));