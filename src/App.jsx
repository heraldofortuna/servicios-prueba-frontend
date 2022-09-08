import React from "react";

import GlobalStyle from "./styles/globalStyles";
import Header from "./layouts/header/Header";
import Main from "./layouts/main/Main";
import Footer from "./layouts/footer/Footer";
import ServiceForm from "./components/form/Form";
import ServicesList from "./components/cardList/CardList";

const App = () => {
  return (
    <div className="app">
      <div className="wrapper">
        <GlobalStyle />
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
