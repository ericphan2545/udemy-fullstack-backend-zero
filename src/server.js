require("dotenv").config(); // Load environment variables from .env file
const express = require("express");
const configviewEngine = require("./config/viewEngine.js");
const webRoutes = require("./routes/web.js");

const app = express();
const port = process.env.PORT || 3000; // Default port is 3000 if not specified in .env
const hostname = process.env.HOSTNAME || "localhost"; // Default hostname is localhost if not specified in .env

// config template engine
configviewEngine(app);

// declare route
app.use("/", webRoutes);


// Khai bao route

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
