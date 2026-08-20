const express = require("express");

const router = express.Router();

const {
    createRestaurant,
    getRestaurants,
    getRestaurantById,
    getTopRestaurants,
    updateRestaurant,
    deleteRestaurant
} = require("../controllers/restaurantController");

const authMiddleware = require("../middleware/authMiddleware");



router.post("/", authMiddleware, createRestaurant);



router.get("/", authMiddleware, getRestaurants);



router.get("/top", authMiddleware, getTopRestaurants);



router.get("/:id", authMiddleware, getRestaurantById);



router.put("/:id", authMiddleware, updateRestaurant);



router.delete("/:id", authMiddleware, deleteRestaurant);


module.exports = router;