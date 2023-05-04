import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./combonents/Header";
import Footer from "./combonents/Footer";
import Home from "./combonents/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>


        <Route path="/" element={<Home />} />


      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
