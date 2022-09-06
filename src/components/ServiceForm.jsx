import React from "react";

import Button from "../components/Button";

const ServiceForm = () => {
  return (
    <form>
      <h2>Servicio</h2>
      <label>
        Nombre
        <input />
      </label>
      <label>
        Descripción
        <input />
      </label>
      <div>
        <Button text={"Grabar"} />
        <Button text={"Cancelar"} />
      </div>
    </form>
  );
};

export default ServiceForm;
