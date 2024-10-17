const Product = require('../Modal/productschema'); // Adjust the path if necessary

exports.getProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addProduct = async (req, res) => {
  const { name, price, imglink, category } = req.body;

  try {
    // Check if the product already exists
    const existingProduct = await Product.findOne({ name });
    if (existingProduct) {
      return res.status(400).json({ message: 'Product already exists' });
    }

    // Create a new product instance
    const newProduct = new Product({ name, price, imglink, category });
    await newProduct.save();
    res.status(201).json({ message: 'Product added successfully!' });
  } catch (error) {
    console.error('Error adding product:', error.message);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


exports.deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const ProductDelete = await Product.findByIdAndDelete(id); 
    if (!ProductDelete) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully!' });
  } catch (error) {
    console.error('Error deleting Product:', error.message);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

