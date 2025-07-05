import React from 'react';
import { Container, Row, Col, Nav, Image } from 'react-bootstrap';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';

import logo from '../images/pngtree-e-letter-logo-ecommerce-shop-store-design-png-image_7265997-removebg-preview.png';

const Footer = () => {
  const socialLinks = [
    { icon: FaFacebook, url: 'https://facebook.com', label: 'Facebook' },
    { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: FaInstagram, url: 'https://instagram.com', label: 'Instagram' },
    { icon: FaLinkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-dark text-light pt-5 pb-4 mt-auto">
      <Container>
        <Row className="align-items-start">
          {/* Logo */}
          <Col md={3} className="mb-4 text-center text-md-start">
            <Image
              src={logo}
              alt="Company Logo"
              width={80}
              fluid
              className="mb-2"
            />
            <p className="small text-muted">Building the future, together.</p>
          </Col>

          {/* Social */}
          <Col md={3} className="mb-4 text-center text-md-start">
            <h5 className="text-uppercase fs-6">Follow Us</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-2">
              {socialLinks.map(({ icon: Icon, url, label }, idx) => (
                <a
                  key={idx}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-light fs-4"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </Col>

          {/* Quick Links */}
          <Col md={3} className="mb-4">
            <h5 className="text-uppercase fs-6">Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="/" className="text-light px-0 py-1 ">
                Home
              </Nav.Link>
              <Nav.Link href="/about" className="text-light px-0 py-1">
                About Us
              </Nav.Link>
              <Nav.Link href="/contact" className="text-light px-0 py-1">
                Contact Us
              </Nav.Link>
            </Nav>
          </Col>

          {/* Contact */}
          <Col md={3} className="mb-4">
            <h5 className="text-uppercase fs-6">Contact us</h5>
            <p className="mb-1">📧 info@yourdomain.com</p>
            <p className="mb-0">📞 +91 12345 67890</p>
          </Col>
        </Row>

        <hr className="border-light my-4" />

        <Row>
          <Col className="text-center">
            <small className="text-muted">
              &copy; {new Date().getFullYear()} Your Company Name. All rights
              reserved.
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
