import React from "react";

const CartMenu = ({ cartItems, onRemoveItem, onCloseMenu }) => {
  return (
    <div className='cart-menu'>
      <div className='cart-menu__header'>
        <button onClick={onCloseMenu}>Close</button>
        <h3>
          Cart (
          {cartItems && cartItems.reduce((acc, item) => acc + item.qty, 0)})
        </h3>
        <button onClick={onRemoveItem}>Remove all</button>
      </div>
    </div>
  );
};

export default CartMenu;
