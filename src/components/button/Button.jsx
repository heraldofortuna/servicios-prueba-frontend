import React from "react";

import { StyledButton } from "./buttonStyle";

const Button = ({ form, type, text, onClick, color }) => {
  return (
    <StyledButton
      form={form}
      type={type}
      onClick={onClick}
      color={color}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
