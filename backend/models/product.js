const mongoose = require("mongoose");

const Product = mongoose.model("Product", {
  name: { type: String },
  image: { type: String },
  desc: { type: String },
  price: { type: Number },
  quntity: { type: Number },
  totalPrice: { type: Number },
});

module.exports = Product;
