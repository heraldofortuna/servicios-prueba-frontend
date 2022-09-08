import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

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
        <Link to={`/edit-service/${data.id}`}>
          <StyledButton>Editar</StyledButton>
        </Link>
        <StyledButton onClick={() => handleDelete(data.id)}>
          Eliminar
        </StyledButton>
      </StyledButtons>
    </StyledCard>
  );
};

export default Card;
