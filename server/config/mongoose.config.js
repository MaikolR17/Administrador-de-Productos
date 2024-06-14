require("dotenv").config();
const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log("Connected to the database"))
    .catch((err) => console.log("Error connecting to the database", err));