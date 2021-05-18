import React from "react";

const CustomRadios = ({ onInputChangeHandler, radios, radioState }) => {
  return (
    <div className='custom-radios__wrapper'>
      {radios &&
        radios.map((item, index) => (
          <label
            key={item.name + index}
            className={
              radioState === item.value ? "custom-radio active" : "custom-radio"
            }
          >
            <input
              name={item.name}
              type='radio'
              value={item.value}
              onChange={(e) => onInputChangeHandler("paymentMethod", e)}
              defaultChecked={index === 0 && true}
            />
            {item.text}
          </label>
        ))}
    </div>
  );
};

export default CustomRadios;
