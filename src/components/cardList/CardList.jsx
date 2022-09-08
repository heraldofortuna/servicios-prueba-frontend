import React from "react";
import { useSelector } from "react-redux";

import { StyledCardList } from "./cardListStyle";
import ServiceItem from "../card/Card";

const CardList = () => {
  const allServices = useSelector((state) => state.services);
  const serviceType = useSelector((state) => state.serviceType);

  const services =
    serviceType === "all"
      ? allServices
      : allServices.filter((service) => service.type === serviceType);

  return (
    <StyledCardList>
      {services.map((service) => {
        return (
          <li key={service.id}>
            <ServiceItem data={service} />
          </li>
        );
      })}
    </StyledCardList>
  );
};

export default CardList;
