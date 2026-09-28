const express = require("express");
const products = require("../data/products.json");

const router = express.Router();

// GET all products
router.get("/", (req, res) => {
    res.json(products);
});

// GET product by ID
router.get("/:id", (req, res) => {
    const id = Number(req.params.id);

    const product = products.find((item) => item.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.json(product);
});

module.exports = router;