import React from "react";

import Button from "../components/Button";

const Header = () => {
  return (
    <header>
      <h1>Servicios</h1>
      <nav>
        <ul>
          <li>
            <Button text="Todos" />
          </li>
          <li>
            <Button text="Autos" />
          </li>
          <li>
            <Button text="Salud" />
          </li>
          <li>
            <Button text="Hogar" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
