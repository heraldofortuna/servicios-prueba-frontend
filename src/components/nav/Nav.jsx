import React from "react";
import { useDispatch } from "react-redux";

import { StyledNav, StyledList, StyledItem } from "./navStyle";
import serviceTypes from "../../constants/serviceTypes";
import { filterServices } from "../../features/services/serviceTypeSlice";

const Nav = () => {
  const dispatch = useDispatch();

  const handleSelectType = (type) => {
    dispatch(filterServices(type));
  };

  return (
    <StyledNav>
      <StyledList>
        {serviceTypes.map((serviceType) => {
          return (
            <StyledItem
              key={serviceType.id}
              onClick={() => handleSelectType(serviceType.type)}
            >
              {serviceType.name}
            </StyledItem>
          );
        })}
      </StyledList>
    </StyledNav>
  );
};

export default Nav;
