import styled from "styled-components";

const StyledButton = styled.button`
  color: ${(props) => props.color};
  background-color: transparent;
  border: 1px solid;
  border-color: ${(props) => props.color};
  border-radius: 4px;
  font-size: 14px;
  padding: 8px 12px;
  cursor: pointer;
  transition: 0.25s all;
  &: hover {
    opacity: 0.5;
  }
`;

export { StyledButton };
