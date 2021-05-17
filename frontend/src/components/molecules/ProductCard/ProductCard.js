import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import AddToCartBtn from "../../atoms/AddToCartBtn/AddToCartBtn";
import { setCart, getCart } from "../../../redux/actions/cartActions";
import { CART_STATE_RESET } from "../../../redux/types/cartTypes";

const ProductCard = ({ product, variant, view, addToCart }) => {
  const dispatch = useDispatch();

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  const [qty, setQty] = useState(1);
  const cart = useSelector((state) => state.cart);
  const { success } = cart;

  useEffect(() => {
    if (success) {
      dispatch(getCart());
      dispatch({ type: CART_STATE_RESET }); //prevent loop
    }
  }, [success, dispatch]);

  const onDecrement = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const onIncrement = () => {
    //add countInStock condition here
    setQty(qty + 1);
  };

  const onAddToCart = () => {
    dispatch(setCart(product.slug, qty));
    console.log("dispatch addtocart action then show cartmenu");
  };

  return (
    <div className={variant ? `product-card ${variant}` : " product-card"}>
      <div className='container'>
        <div className='product-card__img'>
          <img src={product.image[view]} alt={product.name} />
        </div>
        <div className='product-card__text'>
          {product.new && (
            <span className='product-card__text--newTag'>New Product</span>
          )}
          {!addToCart ? <h2>{product.name}</h2> : <h1>{product.name}</h1>}
          <p>{product.description}</p>
          {!addToCart ? (
            <Link
              className='primary-button fill orange'
              to={`/product/${product.slug}`}
            >
              See Product
            </Link>
          ) : (
            <span className='product-card__text--price'>
              {formatter.format(product.price)}
            </span>
          )}
          {addToCart && (
            <AddToCartBtn
              onDecrement={onDecrement}
              onIncrement={onIncrement}
              onAddToCart={onAddToCart}
              qty={qty}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
