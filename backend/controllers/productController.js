import asyncHandler from "express-async-handler";
import AudioProduct from "../models/audioProductModel.js";

//@desc Fetch all products
//@route GET /api/products
//@access Public
const getAllProducts = asyncHandler(async (req, res) => {
  const products = await AudioProduct.find({});
  res.json(products);
});

//@desc Fetch ALL product using query
//@route GET /api/products/all?category=category
//@access Public
const getAllProductsByQuery = asyncHandler(async (req, res) => {
  const product = await AudioProduct.find(req.query).sort({ new: -1 }); //sort new by descending
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Category not found");
  }
});

//@desc Fetch ONE product using query
//@route GET /api/products/one?slug=slug
//@access Public
const getOneProductByQuery = asyncHandler(async (req, res) => {
  const product = await AudioProduct.findOne(req.query);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export { getAllProducts, getAllProductsByQuery, getOneProductByQuery };
