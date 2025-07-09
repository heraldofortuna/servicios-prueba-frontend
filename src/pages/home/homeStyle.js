import styled from "styled-components";

const StyledContainer = styled.main`
  max-width: 1000px;
  width: 90%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;
  margin: 0 auto;
  @media (min-width: 768px) {
    flex-direction: row-reverse;
  }
`;

export { StyledContainer };
