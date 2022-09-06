import React from "react";

import ServiceForm from "./components/ServiceForm";
import ServicesList from "./components/ServicesList";

const App = () => {
  return (
    <div className="app">
      <div className="wrapper">
        <ServiceForm />
        <ServicesList />
      </div>
    </div>
  );
};

export default App;
