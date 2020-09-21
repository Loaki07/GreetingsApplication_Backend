const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const homepageRoute = require("./routes/homepage");
const usersRoute = require("./routes/users");
const servicesRoute = require("./routes/services");
require("dotenv/config");
require("./config/db");

// Middleware
app.use(bodyParser.json());
app.use("/", homepageRoute);
app.use("/users", usersRoute);
app.use("/services", servicesRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
