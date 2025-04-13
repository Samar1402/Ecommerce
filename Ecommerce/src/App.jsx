// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Product from "./Components/Product/Product";
import Accessorie from "./Components/Accessorie";
import Login from "./Components/Login";
import Signup from "./Components/SignUp";
import Cart from "./Components/Cart";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="accessorie" element={<Accessorie />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
