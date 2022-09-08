import React from "react";

import { StyledWrapper, StyledSelect } from "./selectStyle";
import serviceTypes from "../../constants/serviceTypes";

const Select = ({ label, name, value, onChange }) => {
  return (
    <StyledWrapper>
      {label}
      <StyledSelect name={name} value={value} onChange={onChange}>
        {serviceTypes.map((option) => {
          return (
            <option
              key={option.id}
              value={option.type}
              disabled={option.type === "all"}
            >
              {option.name}
            </option>
          );
        })}
      </StyledSelect>
    </StyledWrapper>
  );
};

export default Select;
