import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./styles/globalStyles";
import Home from "./pages/home/Home";
import EditForm from "./pages/editForm/EditForm";

const App = () => {
  return (
    <div className="app">
      <div className="wrapper">
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/edit-service/:id"
              element={<EditForm />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
