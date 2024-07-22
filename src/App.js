import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import Categorypage from "./pages/category page";
import Productpage from "./pages/product detail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/category" element={<Categorypage />} />
        <Route path="/product/:productId" element={<Productpage />} />
      </Routes>
    </Router>
  );
};

export default App;
