import React from "react";

import {
  StyledHeader,
  StyledContainer,
  StyledTitle,
} from "./headerStyle";
import Nav from "../../components/nav/Nav";

const Header = ({ editMode = false }) => {
  const title = editMode ? "Editar servicio" : "Servicios";

  return (
    <StyledHeader>
      <StyledContainer>
        <StyledTitle>{title}</StyledTitle>
        <Nav editMode={editMode} />
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
