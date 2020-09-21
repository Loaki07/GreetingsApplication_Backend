const mongoose = require("mongoose");

// MongoDB Connection
mongoose
  .connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB!"))
  .catch((error) => {
    console.error("Could not Connect to MongoDB...", error);
    process.exit();
  });

module.exports = mongoose;
