const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const connectToDb = require("./db/db");
const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes");
const cookieParser = require("cookie-parser");
const app = express();
const mapsRoutes = require("./routes/maps.routes");
const ridesRoutes = require("./routes/ride.routes");

connectToDb()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());

// Route to handle the root URL
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use('/users',userRoutes)
app.use('/captains',captainRoutes)
app.use('/maps',mapsRoutes)
app.use('/rides',ridesRoutes)

module.exports = app;
