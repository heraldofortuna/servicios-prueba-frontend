import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: white;
`;

const StyledContainer = styled.div`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const StyledTitle = styled.h1`
  padding: 12px 0;
`;

export { StyledHeader, StyledContainer, StyledTitle };
