import React from "react";

import Header from "./layouts/Header";
import Main from "./layouts/Main";
import Footer from "./layouts/Footer";
import ServiceForm from "./components/ServiceForm";
import ServicesList from "./components/ServicesList";

const App = () => {
  return (
    <div className="app">
      <div className="wrapper">
        <Header />
        <Main>
          <ServiceForm />
          <ServicesList />
        </Main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
