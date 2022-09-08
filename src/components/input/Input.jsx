import React from "react";

import { StyledWrapper, StyledInput } from "./inputStyle";

const Input = ({ label, name, value, type, onChange, required }) => {
  return (
    <StyledWrapper>
      {label}
      <StyledInput
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        required={required}
        maxLength="25"
      />
    </StyledWrapper>
  );
};

export default Input;
