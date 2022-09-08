import React from "react";
import { useDispatch } from "react-redux";

import {
  StyledCard,
  StyledContainer,
  StyledButtons,
  StyledButton,
} from "./cardStyle";
import { deleteService } from "../../features/services/serviceSlice";

const Card = ({ data }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteService(id));
  };

  return (
    <StyledCard>
      <StyledContainer>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </StyledContainer>
      <StyledButtons>
        <StyledButton>Editar</StyledButton>
        <StyledButton onClick={() => handleDelete(data.id)}>
          Eliminar
        </StyledButton>
      </StyledButtons>
    </StyledCard>
  );
};

export default Card;
