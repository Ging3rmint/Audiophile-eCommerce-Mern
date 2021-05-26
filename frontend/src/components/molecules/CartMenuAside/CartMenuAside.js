import React from "react";
import { PayPalButton } from "react-paypal-button-v2";
// import { CardElement, useElement, useStripe } from "@stripe.react-stripe-js";

const CartMenuAside = ({
  cartItems,
  paymentSDKready,
  paymentSuccessHandler,
  paymentMethod,
}) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  cartItems.itemsPrice = cartItems.reduce(
    (acc, item) => acc + item.qty * item.price,
    0
  );

  const gstAmt = 7;

  cartItems.shippingPrice = 0;
  cartItems.taxPrice = addDecimals(
    Number(((gstAmt / 100) * cartItems.itemsPrice).toFixed(2))
  );

  cartItems.totalPrice = (
    Number(cartItems.itemsPrice) +
    Number(cartItems.shippingPrice) +
    Number(cartItems.taxPrice)
  ).toFixed(2);

  return (
    <aside className='cart-menu-aside'>
      <h2>Summary</h2>
      <div className='cart-menu-aside__product--scrollable'>
        <ul className='cart-menu-aside__product--list'>
          {cartItems &&
            cartItems.map((item) => (
              <li key={item.slug} className='cart-menu-aside__item'>
                <div className='cart-menu__item__img'>
                  <img src={item.image["mobile"]} alt={item.name} />
                </div>
                <div className='cart-menu-aside__item__description'>
                  <strong>{item.tag}</strong>
                  <p>{formatter.format(item.price)}</p>
                </div>
                <span>x {item.qty}</span>
              </li>
            ))}
        </ul>
      </div>
      <div className='cart-menu-aside__description'>
        <div className='cart-menu-aside__description__wrapper'>
          <span className='cart-menu-aside__description--label'>Total</span>
          <span>{formatter.format(cartItems.itemsPrice)}</span>
        </div>
        <div className='cart-menu-aside__description__wrapper'>
          <span className='cart-menu-aside__description--label'>
            Shipping (FREE)
          </span>
          <span> $0</span>
        </div>
        <div className='cart-menu-aside__description__wrapper'>
          <span className='cart-menu-aside__description--label'>
            GST ({gstAmt}%)
          </span>
          <span> ${cartItems.taxPrice}</span>
        </div>
        <div className='cart-menu-aside__description__wrapper--total'>
          <span className='cart-menu-aside__description--label'>
            Grand Total
          </span>
          <span className='grandtotal'> ${cartItems.totalPrice}</span>
        </div>
      </div>
      <div className='cart-menu-aside__payment'>
        {paymentSDKready ? (
          <PayPalButton
            amount={cartItems.totalPrice}
            onSuccess={paymentSuccessHandler}
          />
        ) : (
          paymentMethod === "cash" && (
            <button
              className='primary-button fill orange block'
              onClick={paymentSuccessHandler}
            >
              Continue
            </button>
          )
        )}
      </div>
    </aside>
  );
};

export default CartMenuAside;
