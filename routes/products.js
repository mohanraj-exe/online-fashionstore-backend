const express = require('express');
const router = express.Router();
const { createProduct, 
        getAllProducts, 
        getOneProductBySlug, 
        getOneProductById } = require("../controllers/productController");

// product routes
router.get('/', getAllProducts);

router.get('/slug/:slug', getOneProductBySlug);

router.post('/', createProduct);

router.get('/:id', getOneProductById);

module.exports = router;