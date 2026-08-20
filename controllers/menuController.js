const MenuItem = require("../models/MenuItem");


const createMenuItem = async (req, res) => {
    try {
        const menuItem = await MenuItem.create({
            ...req.body,
            restaurantId: req.params.id
        });

        res.status(201).json({
            message: "Menu item created successfully",
            menuItem
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to create menu item",
            error: error.message
        });
    }
};



const getMenuItemsByRestaurant = async (req, res) => {
    try {
        const menuItems = await MenuItem.find({
            restaurantId: req.params.id
        });

        res.status(200).json({
            menuItems
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to get menu items",
            error: error.message
        });
    }
};



const getMenuItemById = async (req, res) => {
    try {
        const menuItem = await MenuItem.findById(req.params.id);

        if (!menuItem) {
            return res.status(404).json({
                message: "Menu item not found"
            });
        }

        res.status(200).json({
            menuItem
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to get menu item",
            error: error.message
        });
    }
};



const updateMenuItem = async (req, res) => {
    try {
        const menuItem = await MenuItem.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!menuItem) {
            return res.status(404).json({
                message: "Menu item not found"
            });
        }

        res.status(200).json({
            message: "Menu item updated successfully",
            menuItem
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to update menu item",
            error: error.message
        });
    }
};



const deleteMenuItem = async (req, res) => {
    try {
        const menuItem = await MenuItem.findByIdAndDelete(req.params.id);

        if (!menuItem) {
            return res.status(404).json({
                message: "Menu item not found"
            });
        }

        res.status(200).json({
            message: "Menu item deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to delete menu item",
            error: error.message
        });
    }
};


module.exports = {
    createMenuItem,
    getMenuItemsByRestaurant,
    getMenuItemById,
    updateMenuItem,
    deleteMenuItem
};