import styled from "styled-components";

const StyledNav = styled.nav`
  background-color: whitesmoke;
  width: 100%;
`;

const StyledList = styled.ul`
  width: fit-content;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
`;

const StyledItem = styled.li`
  color: black;
  opacity: ${(props) => (props.selected ? 1 : 0.5)};
  cursor: pointer;
  transition: 0.25s all;
  &: hover {
    opacity: 0.5;
  }
`;

export { StyledNav, StyledList, StyledItem };
