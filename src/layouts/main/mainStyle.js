import styled from "styled-components";

const StyledMain = styled.main`
  background-color: white;
  padding: 0 12px;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;
  @media (min-width: 768px) {
    flex-direction: row-reverse;
  }
`;

export { StyledMain, StyledContainer };
