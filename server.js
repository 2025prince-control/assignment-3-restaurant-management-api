const express = require("express");
const connectDB = require("./config/db");

const restaurantRoutes = require("./route/restaurantRoutes");
const menuRoutes = require("./route/menuRoutes");
const authRoutes = require("./route/authRoutes");

const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

const app = express();


app.use(express.json());


app.use(logger);


connectDB();


app.use("/restaurants", restaurantRoutes);
app.use("/", menuRoutes);
app.use("/auth", authRoutes);


app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Restaurant Management API"
    });
});


app.use(errorHandler);


const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});