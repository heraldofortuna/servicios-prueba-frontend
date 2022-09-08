import React from "react";

import {
  StyledHeader,
  StyledContainer,
  StyledTitle,
} from "./headerStyle";
import Nav from "../../components/nav/Nav";

const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledTitle>Servicios</StyledTitle>
        <Nav />
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
