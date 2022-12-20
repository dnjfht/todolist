import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../redux/components/Footer/Footer";
import Header from "../redux/components/Header/Header";
import Detail from "../pages/Detail";
import Main from "../pages/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
