import React from "react";

import Button from "../components/Button";

const ServiceItem = ({ data }) => {
  return (
    <>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <div>
        <Button text="Editar" />
        <Button text="Eliminar" />
      </div>
    </>
  );
};

export default ServiceItem;
