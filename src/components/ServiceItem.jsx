import React from "react";
import { useDispatch } from "react-redux";

import Button from "../components/Button";
import { deleteService } from "../features/services/serviceSlice";

const ServiceItem = ({ data }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteService(id));
  };

  return (
    <>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <div>
        <Button text="Editar" />
        <Button
          text="Eliminar"
          onClick={() => handleDelete(data.id)}
        />
      </div>
    </>
  );
};

export default ServiceItem;
