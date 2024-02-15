// App.jsx
import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import { About, Services, Dashboard, Contact, Home } from "./Components/pages";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
