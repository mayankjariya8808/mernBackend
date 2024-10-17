const Cart = require('../Modal/cart');

exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.find().populate('productId');
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    const newCartItem = new Cart({ productId, quantity });
    await newCartItem.save();
    res.status(201).json(newCartItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
