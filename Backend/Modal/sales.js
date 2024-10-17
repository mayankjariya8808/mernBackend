const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
  date: { type: String, required: true },
  amount: { type: Number, required: true },
});

module.exports = mongoose.model('Sale', saleSchema);
