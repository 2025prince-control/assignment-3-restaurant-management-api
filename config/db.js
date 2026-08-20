const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://2025princey_db_user:princey_py_04@cluster0.a7hfyd2.mongodb.net/?appName=Cluster0");

        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("MongoDB connection failed:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;