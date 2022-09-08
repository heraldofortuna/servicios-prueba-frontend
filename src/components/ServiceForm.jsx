import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addService } from "../features/services/serviceSlice";
import initialServiceState from "../constants/initialServiceState";
import Button from "../components/Button";

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
    <>
      <form id="service-form" onSubmit={handleSubmit}>
        <h2>Servicio</h2>
        <label>
          Nombre
          <input
            name="title"
            value={service.title}
            type="text"
            onChange={handleChange}
          />
        </label>
        <label>
          Tipo
          <select
            name="type"
            value={service.type}
            onChange={handleChange}
          >
            <option value={"cars"}>Autos</option>
            <option value={"health"}>Salud</option>
            <option value={"home"}>Hogar</option>
          </select>
        </label>
        <label>
          Descripción
          <textarea
            name="description"
            value={service.description}
            onChange={handleChange}
          />
        </label>
      </form>
      <div>
        <Button form="service-form" type="submit" text={"Grabar"} />
        <Button onClick={handleClickCancel} text={"Cancelar"} />
      </div>
    </>
  );
};

export default ServiceForm;
