import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  StyledWrapper,
  StyledForm,
  StyledContainer,
  StyledButtons,
} from "./formStyle";
import { addService } from "../../features/services/serviceSlice";
import initialServiceState from "../../constants/initialServiceState";
import Input from "../input/Input";
import Button from "../button/Button";
import Select from "../select/Select";
import TextArea from "../textarea/TextArea";

const ServiceForm = () => {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services);
  const [service, setService] = useState(initialServiceState);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setService({
      ...service,
      id: services.length + 1,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addService(service));
  };

  const handleClickCancel = () => {
    setService(initialServiceState);
  };

  return (
    <StyledWrapper>
      <StyledForm id="service-form" onSubmit={handleSubmit}>
        <h2>Servicio</h2>
        <StyledContainer>
          <Input
            label="Nombre"
            name="title"
            value={service.title}
            type="text"
            onChange={handleChange}
            required={true}
          />
          <TextArea
            label="Descripción"
            name="description"
            value={service.description}
            onChange={handleChange}
            required={true}
          />
          <Select
            label="Tipo"
            name="type"
            value={service.type}
            onChange={handleChange}
          />
        </StyledContainer>
      </StyledForm>
      <StyledButtons>
        <Button
          form="service-form"
          type="submit"
          text={"Grabar"}
          color="forestgreen"
        />
        <Button
          onClick={handleClickCancel}
          text={"Cancelar"}
          color="crimson"
        />
      </StyledButtons>
    </StyledWrapper>
  );
};

export default ServiceForm;
