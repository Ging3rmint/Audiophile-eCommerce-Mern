import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import PaymentSuccess from "../components/organisms/PaymentSuccess/PaymentSuccess";
import CheckoutForm from "../components/organisms/CheckoutForm/CheckoutForm";
import CartMenuAside from "../components/molecules/CartMenuAside/CartMenuAside";

const CheckoutScreen = ({ history, view }) => {
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

  const [paymentSDKready, setPaymentSDKready] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const onInputChangeHandler = (key, e) => {
    setFormData({ ...formData, [key]: e.currentTarget.value });
  };

  const onBackHandler = () => {
    history.goBack();
  };

  useEffect(() => {
    //check if script exist
    const checkScriptExist = (type) => {
      const scripts = document.getElementsByTagName("script");
      for (var i = scripts.length; i--; ) {
        if (scripts[i].src.includes(type)) return true;
      }
      return false;
    };

    //remove script from html
    const removeAScript = (type) => {
      const scripts = document.getElementsByTagName("script");
      for (var i = scripts.length; i--; ) {
        if (scripts[i].src.includes(type))
          document.body.removeChild(scripts[i]);
      }
    };

    const { paymentMethod } = formData; //get default paymentMethod

    //dynamically inject paypal script
    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get("/api/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setPaymentSDKready(true);
      };
      document.body.appendChild(script);
    };

    if (paymentMethod === "paypal" && !checkScriptExist("paypal")) {
      addPayPalScript();
    } else if (paymentMethod === "paypal" && checkScriptExist("paypal")) {
      setPaymentSDKready(true);
    } else if (paymentMethod === "cash") {
      if (checkScriptExist("paypal")) {
        removeAScript("paypal");
        setPaymentSDKready(false);
      }
    }
  }, [setPaymentSDKready, formData]);

  const paymentSuccessHandler = (paymentResult) => {
    const { paymentMethod } = formData; //get default paymentMethod

    if (paymentMethod === "paypal") {
      console.log(paymentResult);
    } else if (paymentMethod === "cash") {
      setPaymentSuccess(true);
    }
  };

  return (
    <section style={{ backgroundColor: "#f2f2f2" }}>
      <div
        className='container'
        style={view !== "desktop" ? { padding: "0 24px" } : {}}
      >
        <button
          style={
            view !== "desktop" ? { marginTop: "16px" } : { marginTop: "79px" }
          }
          className='back-button'
          onClick={onBackHandler}
        >
          Go Back
        </button>
        <CheckoutForm
          onInputChangeHandler={onInputChangeHandler}
          radioState={formData.paymentMethod}
        />
        <CartMenuAside
          cartItems={cartItems}
          paymentSDKready={paymentSDKready}
          paymentSuccessHandler={paymentSuccessHandler}
          paymentMethod={formData.paymentMethod}
        />

        <PaymentSuccess isVisible={paymentSuccess} />
      </div>
    </section>
  );
};

export default CheckoutScreen;
