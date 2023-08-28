import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/common/Navbar";
import Home from "../src/components/pages/Home";
import Footer from "./components/common/Footer";
import WebDesign from "./components/pages/WebDesign";
import AppDesign from "./components/pages/AppDesign";
import GraphicDesign from "./components/pages/GraphicDesign";
import AboutUs from "./components/pages/AboutUs";
import Locations from "./components/pages/Locations";
import Contact from "./components/pages/Contact";

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
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
