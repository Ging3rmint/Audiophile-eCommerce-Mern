import React, { useState } from "react";
import { useSelector } from "react-redux";
import CheckoutForm from "../components/organisms/CheckoutForm/CheckoutForm";
import CartMenuAside from "../components/molecules/CartMenuAside/CartMenuAside";

const CheckoutScreen = ({ history }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    paymentMethod: "paypal",
  });

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const onInputChangeHandler = (key, e) => {
    console.log(e.target.value);
    setFormData({ ...formData, [key]: e.currentTarget.value });
  };

  const onBackHandler = () => {
    history.goBack();
  };

  return (
    <section style={{ backgroundColor: "#f2f2f2" }}>
      <div className='container'>
        <button
          style={{ marginTop: "79px" }}
          className='back-button'
          onClick={onBackHandler}
        >
          Go Back
        </button>
        <CheckoutForm
          onInputChangeHandler={onInputChangeHandler}
          radioState={formData.paymentMethod}
        />
        <CartMenuAside cartItems={cartItems} />
      </div>
    </section>
  );
};

export default CheckoutScreen;
