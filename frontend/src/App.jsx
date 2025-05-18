import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Screens/Login';
import Register from './components/Screens/Register';
import Navbar from './components/utility components/Navbar';
import Home from './components/Screens/Home';
import About from './components/Screens/About';
import Cart from './components/Screens/Cart';
import Footer from './components/utility components/Footer';
import Header from './components/utility components/Header';
import ProductDeatils from './components/Screens/ProductDeatils';
import Payement from './components/Screens/Payement';
import './App.css';
const App = () => {
  return (
    <Router>       
      <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={< Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/About" element={<About />}></Route>
          <Route path="/Cart" element={<Cart/>}></Route>
          <Route path="/productdetails/:id"element={<ProductDeatils />}></Route>
          <Route path="/Payement/productdetails/:id"element={<Payement />}/>
        </Routes>
        <Footer />
      </Router>
  );
};

export default App;
