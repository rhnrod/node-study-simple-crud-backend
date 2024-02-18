const express = require('express');
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/product.controller');
const router = express.Router();

router.get('/', getProducts);
router.get("/:id", getProduct);

router.post('/', createProduct);

// update a product
router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

module.exports = router;