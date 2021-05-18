import React from "react";

const CustomInput = ({
  onInputChangeHandler,
  inputType,
  placeholder,
  inputName,
  variant,
  label,
  required,
  checked,
}) => {
  return (
    <div className={variant ? `custom-input ${variant}` : "custom-input"}>
      <label>
        {label}
        <input
          name={inputName}
          type={inputType}
          placeholder={placeholder}
          onChange={onInputChangeHandler}
          required={required}
          checked={checked}
        ></input>
      </label>
    </div>
  );
};

export default CustomInput;
