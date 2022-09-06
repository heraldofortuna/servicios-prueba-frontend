import React from "react";
import { useSelector } from "react-redux";

import ServiceItem from "../components/ServiceItem";

const ServicesList = () => {
  const services = useSelector((state) => state.services);
  console.log(services);
  return (
    <ul>
      {services.map((service) => {
        return (
          <li key={service.id}>
            <ServiceItem data={service} />
          </li>
        );
      })}
    </ul>
  );
};

export default ServicesList;
