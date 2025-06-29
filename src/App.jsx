import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import Productdetails from './components/Productdetails';
import Buynow from './components/Buynow';
import Payment from './components/Payment';
import NavbarComponent from './components/Navbar';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';

const AppLayout = () => {
  const location = useLocation();

  // Cart count state
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(totalQty);
  }, []);

  // ✅ Show navbar only on about and contact pages
  const showNavbar = location.pathname === '/about' || location.pathname === '/contact';

  // ✅ Show footer only on /home, /about, and /contact
  const showFooter =
    location.pathname === '/home' ||
    location.pathname === '/about' ||
    location.pathname === '/contact';

  return (
    <>
      {showNavbar && <NavbarComponent cartCount={cartCount} />}

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/productdetails/:id' element={<Productdetails />} />
        <Route path='/buy' element={<Buynow />} />
        <Route path='/payment' element={<Payment />} />
      </Routes>

      {/* ✅ Show footer only on selected pages */}
      {showFooter && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppLayout />
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
