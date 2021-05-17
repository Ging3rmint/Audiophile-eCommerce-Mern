import asyncHandler from "express-async-handler";

//@desc Set cart into mongo session
//@route POST /api/cart
//@access Public
const setCart = async (req, res) => {
  req.session.cart = req.body;
  res.sendStatus(201);
};

//@desc Get cart from session
//@route Get /api/cart
//@access Public
const getCart = async (req, res) => {
  const cart = req.session.cart ? req.session.cart : [];
  res.send(cart);
};

export { setCart, getCart };
