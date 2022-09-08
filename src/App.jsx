import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";

import GlobalStyle from "./styles/globalStyles";
import Home from "./pages/home/Home";
import EditForm from "./pages/editForm/EditForm";

const App = () => {
  return (
    <div className="app">
      <div className="wrapper">
        <GlobalStyle />
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/edit-service/:id"
              element={<EditForm />}
            ></Route>
          </Routes>
        </HashRouter>
      </div>
    </div>
  );
};

export default App;
