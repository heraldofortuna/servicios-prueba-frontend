import React from "react";

import { StyledContainer } from "./homeStyle";
import Header from "../../layouts/header/Header";
import Footer from "../../layouts/footer/Footer";
import Form from "../../components/form/Form";
import CardList from "../../components/cardList/CardList";

const Home = () => {
  return (
    <>
      <Header />
      <StyledContainer>
        <Form />
        <CardList />
      </StyledContainer>
      <Footer />
    </>
  );
};

export default Home;
