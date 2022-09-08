import React from "react";

import { StyledContainer } from "./editFormStyle";
import Header from "../../layouts/header/Header";
import Footer from "../../layouts/footer/Footer";
import Form from "../../components/form/Form";

const EditForm = () => {
  return (
    <>
      <Header editMode />
      <StyledContainer>
        <Form />
      </StyledContainer>
      <Footer />
    </>
  );
};

export default EditForm;
