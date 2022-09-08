import styled from "styled-components";

const StyledWrapper = styled.div`
  min-width: 400px;
  border: 1px solid gray;
  border-radius: 4px;
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
  padding: 12px 16px;
`;

export { StyledWrapper, StyledForm, StyledContainer, StyledButtons };
