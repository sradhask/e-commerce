import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import test from '../images/pngtree-e-letter-logo-ecommerce-shop-store-design-png-image_7265997-removebg-preview.png';
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { auth } from './firebase';
import { toast } from 'react-toastify';

const navStyle = {
  color: 'black',
  fontWeight: '500',
  textTransform: 'uppercase',
  textDecoration: 'none',
};

const NavbarComponent = ({ cartCount }) => {
  const navigate = useNavigate();

  const wishlist = () => {
    navigate('/wishlist');
  };

  const cartbutton = () => {
    navigate('/cart');
  };

  const logout = async () => {
    try {
      await auth.signOut();
      navigate('/login');
      toast.success('Logout successfully');
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  return (
    <Navbar expand="lg" style={{ padding: '2px 0', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      <Container>
        <Navbar.Brand as={Link} to="/home" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={test} alt="logo" style={{ width: '50px', height: 'auto', marginLeft: '50px' }} />
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: '20px' }}>E-Shop</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: 'white' }} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto" style={{ alignItems: 'center', display: 'flex', gap: '90px' }}>
            <Link to="/home" style={navStyle}>Home</Link>
            <Link to="/about" style={navStyle}>About Us</Link>
            <Link to="/contact" style={navStyle}>Contact Us</Link>
          </Nav>

          <FaHeart
            style={{ width: '30px', height: '25px', color: '#ff80ab', cursor: 'pointer' }}
            onClick={wishlist}
          />

          <div style={{ position: 'relative', marginLeft: '40px' }}>
            <FaShoppingCart
              style={{ width: '30px', height: '25px', cursor: 'pointer' }}
              onClick={cartbutton}
            />
            <span style={{
              position: 'absolute',
              top: '-5px',
              right: '-10px',
              background: '#ff80ab',
              borderRadius: '50%',
              padding: '2px 6px',
              fontSize: '12px',
              fontWeight: 'bold',
              color: 'white'
            }}>
              {cartCount}
            </span>
          </div>
        </Navbar.Collapse>
      </Container>
      <Button onClick={logout} style={{ backgroundColor: '#ff80ab', border: 'none', marginRight: '30px' }}>
        Logout
      </Button>
    </Navbar>
  );
};

export default NavbarComponent;
