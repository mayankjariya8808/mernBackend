const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  items: [
    {
      name: String,
      price: Number,
      quantity: Number,
      imglink: String,
    },
  ],
});

module.exports = mongoose.model('Cart', cartSchema);
