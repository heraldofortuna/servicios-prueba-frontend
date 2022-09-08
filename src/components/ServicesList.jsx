import React from "react";
import { useSelector } from "react-redux";

import ServiceItem from "../components/ServiceItem";

const ServicesList = () => {
  const allServices = useSelector((state) => state.services);
  const serviceType = useSelector((state) => state.serviceType);

  const services =
    serviceType === "all"
      ? allServices
      : allServices.filter((service) => service.type === serviceType);

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
