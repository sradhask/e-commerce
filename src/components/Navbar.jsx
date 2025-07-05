import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaSearch, FaShoppingCart, FaHeart } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { auth } from './firebase';
import { toast } from 'react-toastify';
import test from '../images/pngtree-e-letter-logo-ecommerce-shop-store-design-png-image_7265997-removebg-preview.png';
import '../css/Nav.css';

const NavbarComponent = ({ cartCount }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const cartbutton = () => navigate('/cart');
  const wishlistbutton = () => navigate('/wishlist');

  const logout = async () => {
    try {
      await auth.signOut();
      navigate('/login');
      toast.success('Logout successfully');
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  // 🔍 Only search when user clicks the button
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const encodedQuery = encodeURIComponent(searchQuery.trim());
      navigate(`/search?name=${encodedQuery}`);
    } else {
      toast.warn('Please enter a search term');
    }
  };

  return (
    <Navbar expand="lg" className="main-header">
      <Container className="header-container">
        {/* Logo */}
        <Navbar.Brand as={Link} to="/home" className="d-flex align-items-center">
          <img src={test} alt="logo" style={{ width: '40px', height: 'auto' }} />
          <span className="brand-name">E-<span className="highlight">Shop</span></span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          {/* Nav Links */}
          <Nav className="mx-auto nav-links">
            <Link to="/home" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About Us</Link>
            <Link to="/contact" className="nav-link">Contact Us</Link>
          </Nav>

          {/* Right Side: Search, Wishlist, Cart, Logout */}
          <div className="header-icons d-flex align-items-center gap-5">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="search-bar d-flex align-items-center gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="form-control form-control-sm"
                style={{ width: '180px' }}
              />
              <button type="submit" className="btn btn-sm btn-outline-light">
                <FaSearch className="icon" />
              </button>
            </form>

            {/* Wishlist Icon */}
            <div style={{ cursor: 'pointer' }} onClick={wishlistbutton}>
              <FaHeart className="icon" />
            </div>

            {/* Cart Icon */}
            <div style={{ position: 'relative', cursor: 'pointer' }} onClick={cartbutton}>
              <FaShoppingCart className="icon" />
              {cartCount > 0 && (
                <span className="cart-badge">{cartCount}</span>
              )}
            </div>

            {/* Logout */}
            <Button
              onClick={logout}
              variant="danger"
              size="sm"
              className="logout-btn"
            >
              Logout
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
