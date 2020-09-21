const mongoose = require("mongoose");
const dbUrl = require("./connectionUrl");

// MongoDB Connection
mongoose
  .connect(dbUrl.connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB!"))
  .catch((error) => {
    console.error("Could not Connect to MongoDB...", error);
    process.exit();
  });

module.exports = mongoose;
