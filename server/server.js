const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

//const authRoutes = require('./routes/auth');
const cartRoutes = require('./routes/cart');

const app = express();
app.use(express.json());
//app.use("/api",authRoutes);
app.use("/api",cartRoutes);


const dbURI = process.env.MONGO_CONNECT_URL;
const port = 5000;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(port, () => console.log(`Server running on http://localhost:${port}`)))
  .catch((err) => console.log(err));