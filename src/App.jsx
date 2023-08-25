import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Home from "../src/components/pages/home/Home";
import Footer from "./components/footer/Footer";
import WebDesign from "./components/pages/web_design/WebDesign";
import AppDesign from "./components/pages/app_design/AppDesign";
import GraphicDesign from "./components/pages/graphic_design/GraphicDesign";

function App() {
  const [selectedLink, setSelectedLink] = useState("");

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web-design" element={<WebDesign />} />
        <Route path="/app-design" element={<AppDesign />} />
        <Route path="/graphic-design" element={<GraphicDesign />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
