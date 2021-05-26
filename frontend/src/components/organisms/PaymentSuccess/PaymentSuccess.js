import React from "react";
import { Link } from "react-router-dom";

const PaymentSuccess = ({ isVisible }) => {
  return (
    <div
      className={
        isVisible
          ? "payment-success--overlay fadeIn"
          : "payment-success--overlay"
      }
    >
      <div className='payment-success'>
        <div className='payment-success__tick-wrapper'>
          <img src='/images/tick.png' alt='tick icon' />
        </div>
        <div className='payment-success__text'>
          <h2>Thank you for your order</h2>
          <p>You will receive an email confirmation shortly</p>
        </div>
        <div className='payment-success__orderItems'></div>
        <div className='payment-success__controls'>
          <Link to='/' className='primary-button fill orange block'>
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
