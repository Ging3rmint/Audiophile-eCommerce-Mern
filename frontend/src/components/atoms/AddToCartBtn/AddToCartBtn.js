import React from "react";

const AddToCartBtn = ({ onDecrement, onIncrement, onAddToCart, qty }) => {
  return (
    <div className='addToCart-btn'>
      <div className='addToCart-btn__qty'>
        <button onClick={onDecrement}>
          -<span className='sr-only'>Decrease Quantity</span>
        </button>
        <span>{qty}</span>
        <button onClick={onIncrement}>
          +<span className='sr-only'>increase Quantity</span>
        </button>
      </div>
      <div>
        <button className='primary-button fill orange' onClick={onAddToCart}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default AddToCartBtn;
