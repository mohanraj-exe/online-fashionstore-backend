const {Product} = require("../model/productModel");

// create product-a.k.a launching a new product
const createProduct = async (req, res) =>{

  const { name, slug, department, category, image, price, countInStock, brand, description} = req.body;
  try{
    const product = await Product.create({ 
        name, slug, department, category, image, price, countInStock, brand, description
  })
    res.status(201).send(product)
  }catch(err){
    res.status(400).send({error: err.message})
  }
}

// fetch all products
const getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.send(products);
};

// find one product by slug
const getOneProductBySlug = async (req, res) => {
  const product = await Product.findOne({ slug : req.params.slug});
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
};

// find one product by Id
const getOneProductById = async (req, res) =>{
  const product = await Product.findById({ _id: req.params.id});
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
}

module.exports = {createProduct, getAllProducts, getOneProductBySlug, getOneProductById}