const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const homepageRoute = require("./routes/homepage");
const usersRoute = require("./routes/users");
const mongoose = require("mongoose");
require("dotenv/config");

// Middleware
app.use(bodyParser.json());
app.use("/", homepageRoute);
app.use("/users", usersRoute);

// MongoDB Connection
mongoose
  .connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB!"))
  .catch((error) => {
    console.error("Could not Connect to MongoDB...", error);
    process.exit();
  });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
