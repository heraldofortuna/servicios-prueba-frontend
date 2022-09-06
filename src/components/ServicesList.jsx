import React from "react";
import { useSelector } from "react-redux";

const ServicesList = () => {
  const services = useSelector((state) => state.services);
  console.log(services);
  return (
    <div>
      <h2>Servicios</h2>
      <ul>
        {services.map((service) => {
          return (
            <div key={service.id}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div>
                <button>Editar</button>
                <button>Eliminar</button>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ServicesList;
