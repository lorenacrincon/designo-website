import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/common/navbar/Navbar";
import Home from "../src/components/pages/home/Home";
import Footer from "./components/common/footer/Footer";
import WebDesign from "./components/pages/design/WebDesign";
import AppDesign from "./components/pages/design/AppDesign";
import GraphicDesign from "./components/pages/design/GraphicDesign";
import AboutUs from "./components/pages/about_us/AboutUs";
import Locations from "./components/pages/locations/Locations";
import Contact from "./components/pages/contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/designo-website" element={<Home />} />
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
