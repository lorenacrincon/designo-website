import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "../src/components/pages/home/home.css";
import "../src/components/navbar/navbar.css";
import Navbar from "./components/navbar/Navbar";
import Home from "../src/components/pages/home/Home";

function App() {
  const [selectedLink, setSelectedLink] = useState("");

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
