const express = require("express");
const router = express.Router();
const Product = require("../models/product.js");

const ObjectId = require("mongoose").Types.ObjectId;

//Get API
router.get("/", (req, res) => {
  Product.find((err, doc) => {
    if (err) {
      console.log("Error in Get Data" + err);
    } else {
      res.send(doc);
    }
  });
});

//Get Single Product  API
router.get("/:id", (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    Product.findById(req.params.id, (err, doc) => {
      if (err) {
        console.log("Error in Get Product by id" + err);
      } else {
        res.send(doc);
      }
    });
  } else {
    return res.status(400).send("No record found with id " + req.params._id);
  }
});

//Post API
router.post("/", (req, res) => {
  let pro = new Product({
    name: req.body.name,
    image: req.body.image,
    desc: req.body.desc,
    price: req.body.price,
    quntity: req.body.quntity,
    totalPrice: req.body.totalPrice,
  });

  pro.save((err, doc) => {
    if (err) {
      console.log("Error in Post Data" + err);
    } else {
      res.send(doc);
    }
  });
});

//Put API
router.put("/:id", (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    let pro = {
      name: req.body.name,
      image: req.body.image,
      desc: req.body.desc,
      price: req.body.price,
      quntity: req.body.quntity,
      totalPrice: req.body.totalPrice,
    };

    Product.findByIdAndUpdate(
      req.params.id,
      { $set: pro },
      { new: true },
      (err, doc) => {
        if (err) {
          console.log("Error in Update Product by id" + err);
        } else {
          res.send(doc);
        }
      }
    );
  } else {
    return res.status(400).send("No record found with id " + req.params.id);
  }
});

//Delete API
router.delete("/:id", (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    Product.findByIdAndRemove(req.params.id, (err, doc) => {
      if (err) {
        console.log("Error in Delete Product by id" + err);
      } else {
        res.send(doc);
      }
    });
  } else {
    return res.status(400).send("No record found with id " + req.params.id);
  }
});

module.exports = router;
