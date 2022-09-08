import styled from "styled-components";

const StyledCardList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px 18px;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export { StyledCardList };
