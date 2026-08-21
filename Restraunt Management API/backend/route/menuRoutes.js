const express = require("express");

const router = express.Router();

const {
    createMenuItem,
    getMenuItems,
    getMenuItemsByRestaurant,
    getMenuItemById,
    updateMenuItem,
    deleteMenuItem
} = require("../controllers/menuController");

const authMiddleware = require("../middleware/authMiddleware");



router.get(
    "/restaurants/:id/menu",
    authMiddleware,
    getMenuItemsByRestaurant
);



router.post(
    "/restaurants/:id/menu",
    authMiddleware,
    createMenuItem
);



router.get(
    "/menu/:id",
    authMiddleware,
    getMenuItemById
);



router.put(
    "/menu/:id",
    authMiddleware,
    updateMenuItem
);



router.delete(
    "/menu/:id",
    authMiddleware,
    deleteMenuItem
);


module.exports = router;