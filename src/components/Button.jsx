import React from "react";

const Button = ({ form, type, text, onClick }) => {
  return (
    <button form={form} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
