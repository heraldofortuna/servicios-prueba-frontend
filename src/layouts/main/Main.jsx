import React from "react";

import { StyledMain, StyledContainer } from "./mainStyle";

const Main = ({ children }) => {
  return (
    <StyledMain>
      <StyledContainer>{children}</StyledContainer>
    </StyledMain>
  );
};

export default Main;
