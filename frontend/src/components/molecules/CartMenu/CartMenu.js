import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

//components
import QtyBtn from "../../atoms/QtyBtn/QtyBtn";

//actions
import {
  setCart,
  removeAllCart,
  removeAnItem,
} from "../../../redux/actions/cartActions";

const CartMenu = ({ cartItems, onCloseMenuHandler, isVisible, history }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  const onRemoveAllItemHandler = () => {
    dispatch(removeAllCart());
    onCloseMenuHandler();
    if (location.pathname === "/checkout") {
      history.push("/");
    }
  };

  const onDecreaseHandler = (slug, qty) => {
    if (qty > 1) {
      dispatch(setCart(slug, qty - 1));
    } else {
      dispatch(removeAnItem(slug));
      if (location.pathname === "/checkout") {
        history.push("/");
      }
    }
  };

  const onCheckOutHandler = () => {
    onCloseMenuHandler();
    history.push("/checkout"); //path to checkout page here
  };

  return (
    <div
      className={isVisible ? "cart-menu--overlay fadeIn" : "cart-menu--overlay"}
    >
      <div className='cart-menu'>
        <div className='cart-menu__header'>
          <h3>
            Cart ({" "}
            {cartItems && cartItems.reduce((acc, item) => acc + item.qty, 0)} )
          </h3>
          <button onClick={onRemoveAllItemHandler}>Remove all</button>
        </div>
        <div className='cart-menu__product--scrollable'>
          <ul className='cart-menu__product--list'>
            {cartItems.map((item) => {
              return (
                <li key={item.slug} className='cart-menu__item'>
                  <div className='cart-menu__item__img'>
                    <img src={item.image["mobile"]} alt={item.name} />
                  </div>
                  <div className='cart-menu__item__description'>
                    <strong>{item.tag}</strong>
                    <p>{formatter.format(item.price)}</p>
                  </div>
                  <QtyBtn
                    onIncrement={() =>
                      dispatch(setCart(item.slug, item.qty + 1))
                    }
                    onDecrement={() => onDecreaseHandler(item.slug, item.qty)}
                    qty={item.qty}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className='cart-menu__description'>
          <span className='cart-menu__description--label'>Total</span>
          <span>
            {formatter.format(
              cartItems.reduce((acc, item) => acc + item.qty * item.price, 0)
            )}
          </span>
        </div>
        <div className='cart-menu__controls'>
          <button
            className='primary-button fill orange block'
            onClick={onCheckOutHandler}
          >
            Checkout
          </button>
          <button
            className='primary-button fill black block'
            onClick={onCloseMenuHandler}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartMenu;
