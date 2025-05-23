// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Product from "./Components/Product/Product";
import Accessorie from "./Components/Accessorie";
import Login from "./Components/Login";
import Cart from "./Components/Cart";
import SignUp from "./Components/SignUp";
import ContactUs from "./Components/ContactUS";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="accessorie" element={<Accessorie />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="cart" element={<Cart />} />
        <Route path="contactus" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
