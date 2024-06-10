import Product from '../models/Product.js';

export const createProduct = async (req, res) => {
  // console.log(req.body)

  const { name, category, price, imgURL } = req.body;

  const newProduct = new Product({ name, category, price, imgURL });

  const productSaved = await newProduct.save();

  res.status(201).json(productSaved);
};

export const getProducts = async (req, res) => {
  const products = await Product.find();
  return res.json(products);
};

export const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.productId);

  if (!product) {
    return res.status(400).json({ message: 'Product no found' });
  }

  return res.status(200).json(product);
};
export const updateProductById = async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.productId,
    req.body,
    { new: true }
  ); // new: true para que me devuelva los datos actualizados y no los viejos

  return res.status(200).json(updatedProduct);
};
export const deleteProductById = async (req, res) => {
  const { productId } = req.params;

  const deletedProduct = await Product.findByIdAndDelete(productId);

  return res.status(204).json();
};
