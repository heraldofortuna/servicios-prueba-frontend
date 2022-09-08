import styled from "styled-components";

const StyledWrapper = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledSelect = styled.select`
  font-size: 14px;
  border: 1px solid gray;
  border-radius: 4px;
  padding: 8px;
`;

export { StyledWrapper, StyledSelect };
