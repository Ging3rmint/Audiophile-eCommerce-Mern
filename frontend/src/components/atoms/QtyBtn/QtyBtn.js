import React from "react";

const QtyBtn = ({ onDecrement, onIncrement, qty }) => {
  return (
    <div className='qty-btn'>
      <button onClick={onDecrement}>
        -<span className='sr-only'>Decrease Quantity</span>
      </button>
      <span>{qty}</span>
      <button onClick={onIncrement}>
        +<span className='sr-only'>increase Quantity</span>
      </button>
    </div>
  );
};

export default QtyBtn;
