import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { StyledNav, StyledList, StyledItem } from "./navStyle";
import serviceTypes from "../../constants/serviceTypes";
import { filterServices } from "../../features/services/serviceTypeSlice";

const Nav = ({ editMode }) => {
  const selectedType = useSelector((state) => state.serviceType);
  const dispatch = useDispatch();

  const handleSelectType = (type) => {
    dispatch(filterServices(type));
  };

  return (
    <StyledNav>
      <StyledList>
        {editMode ? (
          <Link to="/">Atrás</Link>
        ) : (
          serviceTypes.map((serviceType) => {
            return (
              <StyledItem
                key={serviceType.id}
                onClick={() => handleSelectType(serviceType.type)}
                selected={selectedType === serviceType.type}
              >
                {serviceType.name}
              </StyledItem>
            );
          })
        )}
      </StyledList>
    </StyledNav>
  );
};

export default Nav;
