import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import AddToCartBtn from "../../atoms/AddToCartBtn/AddToCartBtn";
import { setCart } from "../../../redux/actions/cartActions";

const ProductCard = ({ product, variant, view, addToCart, marginTop }) => {
  const dispatch = useDispatch();

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  const [qty, setQty] = useState(1);

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
  };

  return (
    <div
      style={{ marginTop: marginTop }}
      className={variant ? `product-card ${variant}` : " product-card"}
    >
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
