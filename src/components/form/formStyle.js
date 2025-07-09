import styled from "styled-components";

const StyledWrapper = styled.div`
  max-width: 400px;
  width: 100%;
  border: 1px solid gray;
  border-radius: 4px;
  margin: 0 auto;
  @media (min-width: 768px) {
    min-width: 400px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px 16px 32px 16px;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const StyledButtons = styled.div`
  background-color: whitesmoke;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
`;

export { StyledWrapper, StyledForm, StyledContainer, StyledButtons };
