import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import Categorypage from "./pages/category page";
import Productpage from "./pages/product detail";
import Cart from "./pages/cart";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/categorypage" element={<Categorypage />} />
        <Route path="/product/:productId" element={<Productpage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
