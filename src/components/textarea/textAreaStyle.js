import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledTextArea = styled.textarea`
  font-size: 14px;
  border: 1px solid gray;
  border-radius: 4px;
  padding: 12px 6px;
`;

export { StyledWrapper, StyledTextArea };
