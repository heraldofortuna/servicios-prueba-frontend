import styled from "styled-components";

const StyledCard = styled.div`
  height: 100%;
  max-height: 300px;
  width: 100%;
  background-color: white;
  border: 1px solid gray;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 768px) {
    max-width: 250px;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
`;

const StyledButtons = styled.div`
  background-color: whitesmoke;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 24px;
  border-top: 1px solid gray;
`;

const StyledButton = styled.span`
  color: royalblue;
  font-size: 14px;
  cursor: pointer;
  transition: 0.25s all;
  &: hover {
    opacity: 0.5;
  }
`;

export { StyledCard, StyledContainer, StyledButtons, StyledButton };
