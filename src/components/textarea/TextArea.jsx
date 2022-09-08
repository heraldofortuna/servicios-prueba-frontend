import React from "react";

import { StyledWrapper, StyledTextArea } from "./textAreaStyle";

const TextArea = ({ label, name, value, onChange, required }) => {
  return (
    <StyledWrapper>
      {label}
      <StyledTextArea
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        maxLength="75"
      />
    </StyledWrapper>
  );
};

export default TextArea;
