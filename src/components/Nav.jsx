import React from "react";
import { useDispatch } from "react-redux";

import Button from "./Button";
import serviceTypes from "../constants/serviceTypes";
import { filterServices } from "../features/services/serviceTypeSlice";

const Nav = () => {
  const dispatch = useDispatch();

  const handleSelectType = (type) => {
    dispatch(filterServices(type));
  };

  return (
    <nav>
      <ul>
        {serviceTypes.map((serviceType) => {
          return (
            <li key={serviceType.id}>
              <Button
                text={serviceType.name}
                onClick={() => handleSelectType(serviceType.type)}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
