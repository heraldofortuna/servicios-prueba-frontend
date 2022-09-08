import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import {
  StyledWrapper,
  StyledForm,
  StyledContainer,
  StyledButtons,
} from "./formStyle";
import {
  addService,
  editService,
} from "../../features/services/serviceSlice";
import initialServiceState from "../../constants/initialServiceState";
import Input from "../input/Input";
import Button from "../button/Button";
import Select from "../select/Select";
import TextArea from "../textarea/TextArea";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const services = useSelector((state) => state.services);
  const [service, setService] = useState(initialServiceState);
  const editMode = params.id;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setService({
      ...service,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editMode) {
      dispatch(editService({ ...service, id: params.id }));
    } else {
      dispatch(addService({ ...service, id: services.length + 1 }));
    }

    navigate("/");
  };

  const handleClickCancel = () => {
    setService(initialServiceState);
  };

  useEffect(() => {
    if (editMode) {
      const currentService = services.find(
        (service) => service.id === Number(params.id)
      );

      setService(currentService);
    }
  }, [editMode, params, services]);

  return (
    <StyledWrapper>
      <StyledForm id="service-form" onSubmit={handleSubmit}>
        <h2>Servicio</h2>
        <StyledContainer>
          <Input
            label="Nombre"
            name="title"
            value={service?.title}
            type="text"
            onChange={handleChange}
            required={true}
          />
          <TextArea
            label="Descripción"
            name="description"
            value={service?.description}
            onChange={handleChange}
            required={true}
          />
          <Select
            label="Tipo"
            name="type"
            value={service?.type}
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
        {!editMode && (
          <Button
            onClick={handleClickCancel}
            text={"Cancelar"}
            color="crimson"
          />
        )}
      </StyledButtons>
    </StyledWrapper>
  );
};

export default Form;
