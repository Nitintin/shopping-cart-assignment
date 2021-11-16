import React from 'react';
import Header from './Components/Header/Header';
import Home from "./Components/Home/Home";
import Footer from './Components/Footer/Footer'
import IndexproductListing from './Components/PLP/Index.productListing'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Components/Authentication/Login';
import Register from './Components/Authentication/Register';
import Cart from '../src/Components/Cart/cart'
import Overlay from './Components/Overlay/overlay';

function App(props) {
  
  return (
    <div className="App">
      <Router>
        <Header />
        <Overlay/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<IndexproductListing />} />
          <Route path="/login" element={<Login {...props} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
      <Cart />
      <Footer />
    </div>
  );
}

export default App;
