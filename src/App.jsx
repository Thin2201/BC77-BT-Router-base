// import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CardNV from "./page/CardNV";
import FormTT from "./page/FormTT";
import Home from "./page/Home";
import Header from "./page/Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<CardNV />} />
          <Route path="/card" element={<CardNV />} />
          <Route path="/form" element={<FormTT />} />
          <Route path="/form/:maNhanVien" element={<FormTT />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
