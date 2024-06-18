import React from "react";
import Header from "./components/header/Header";
import Home from './home/Home';
import Checkout from './checkout/Checkout.jsx';
import ProductDetails from './productDetails/ProductDetails.jsx';
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product" element={<ProductDetails />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
