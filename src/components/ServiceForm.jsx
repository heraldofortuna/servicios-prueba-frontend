import React, { useState } from "react";

import Button from "../components/Button";

const ServiceForm = () => {
  const [service, setService] = useState({
    title: "",
    description: "",
    type: "home",
  });
  const [type, setType] = useState("");

  const handleChange = (event) => {
    console.log("handleChange:", event);
  };

  const handleSelectValue = (event) => {
    console.log("handleSelectValue:", event.target);
  };

  return (
    <form>
      <h2>Servicio</h2>
      <label>
        Nombre
        <input name="name" type="text" onChange={handleChange} />
      </label>
      <label>
        Tipo
        <select value={type} onChange={handleSelectValue}>
          <option value={"cars"}>Autos</option>
          <option value={"health"}>Salud</option>
          <option value={"home"}>Hogar</option>
        </select>
      </label>
      <label>
        Descripción
        <textarea name="description" onChange={handleChange} />
      </label>
      <div>
        <Button text={"Grabar"} />
        <Button text={"Cancelar"} />
      </div>
    </form>
  );
};

export default ServiceForm;
