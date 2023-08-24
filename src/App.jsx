import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Home from "../src/components/pages/home/Home";
import Footer from "./components/footer/Footer";

function App() {
  const [selectedLink, setSelectedLink] = useState("");

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
