/*******************************************************************************************
 *
 * Execution       : default node cmd> nodemon app.js
 * Purpose         : Greetings App
 *
 * @description    : Implemention CRUD operation for the Greetings App
 *
 * @file           : app.js
 * @overview       : Greetings App
 * @module         : Greetings App
 * @version        : 1.0
 * @since          : 20/11/2020
 *
 * *****************************************************************************************/

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const homepageRoute = require("./routes/homepage");
const usersRoute = require("./routes/users");
const servicesRoute = require("./routes/services");
require("dotenv/config");
require("./config/db");
require("./config/middlewares");

// Middleware
app.use(bodyParser.json());
app.use("/", homepageRoute);
app.use("/users", usersRoute);
app.use("/services", servicesRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
