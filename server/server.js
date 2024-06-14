const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
PORT = process.env.PORT

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./config/mongoose.config");
require("./routes/product.routes")(app);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});