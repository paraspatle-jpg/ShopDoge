const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require('./routes/auth');
const cartRoutes = require('./routes/cart');

const app = express();
app.use((req,res,next) => {
  // setting up headers
  res.header( "Access-Control-Allow-Origin" , "*");
  res.header("Access-Control-Allow-Methods" , "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  next();
})
app.use(express.json());
app.use("/api",authRoutes);
app.use("/api",cartRoutes);


const dbURI = process.env.MONGO_CONNECT_URL;
const port = process.env.PORT||3001;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(port, () => console.log(`Server running on http://localhost:${port}`)))
  .catch((err) => console.log(err));