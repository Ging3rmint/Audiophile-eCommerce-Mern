import React from "react";
import CustomInput from "../../atoms/CustomInput/CustomInput";
import CustomRadios from "../../molecules/CustomRadios/CustomRadios";

const CheckoutForm = ({ onInputChangeHandler, radioState }) => {
  const radios = [
    {
      name: "paymentMethod",
      variant: "half",
      value: "paypal",
      text: "Paypal",
    },
    {
      name: "paymentMethod",
      variant: "half",
      value: "stripe",
      text: "Stripe",
    },
  ];

  return (
    <form className='checkout-form'>
      <h1>Checkout</h1>
      <div className='checkout-form__wrapper'>
        <h3>Billing Details</h3>
        <div className='checkout-form__input-wrapper'>
          <CustomInput
            onInputChangeHandler={(e) => onInputChangeHandler("name", e)}
            inputName='name'
            placeholder='Alexel Ward'
            variant='half left'
            label='Name'
            inputType='text'
            required={true}
          />
          <CustomInput
            onInputChangeHandler={(e) => onInputChangeHandler("email", e)}
            inputName='email'
            placeholder='alexel@mail.com'
            variant='half'
            label='Email Address'
            inputType='email'
            required={true}
          />
        </div>
        <CustomInput
          onInputChangeHandler={(e) => onInputChangeHandler("phoneNumber", e)}
          inputName='phoneNumber'
          placeholder='+65-9123-1234'
          variant='half'
          label='Phone Number'
          inputType='text'
          required={true}
        />
      </div>
      <div className='checkout-form__wrapper'>
        <h3>Shipping Info</h3>
        <CustomInput
          onInputChangeHandler={(e) => onInputChangeHandler("address", e)}
          inputName='address'
          placeholder='1137 Williams Avenue'
          label='Address'
          inputType='text'
          required={true}
        />
        <div className='checkout-form__input-wrapper'>
          <CustomInput
            onInputChangeHandler={(e) => onInputChangeHandler("zipCode", e)}
            inputName='zipCode'
            placeholder='100001'
            variant='half left'
            label='Zip Code'
            inputType='text'
            required={true}
          />
          <CustomInput
            onInputChangeHandler={(e) => onInputChangeHandler("city", e)}
            inputName='city'
            placeholder='Singapore'
            variant='half'
            label='City'
            inputType='text'
            required={true}
          />
        </div>
        <CustomInput
          onInputChangeHandler={(e) => onInputChangeHandler("country", e)}
          inputName='country'
          placeholder='Singapore'
          variant='half'
          label='Country'
          inputType='text'
          required={true}
        />
      </div>
      <div className='checkout-form__wrapper'>
        <h3>Payment Details</h3>
        <p>Payment Method</p>
        <CustomRadios
          radios={radios}
          radioState={radioState}
          onInputChangeHandler={onInputChangeHandler}
        />
      </div>
    </form>
  );
};

export default CheckoutForm;
