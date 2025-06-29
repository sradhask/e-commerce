import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import aboutImage from '../images/istockphoto-1068618692-1024x1024 (1).jpg';

const About = () => {
  return (
    <div style={{ backgroundColor: '#f8f9fa', padding: '40px 0' }}> {/* Light gray background */}
      <Container className="mt-5">
        {/* About Section */}
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <h2>About E-Shop</h2>
            <p>
              Welcome to <strong>E-Shop</strong>, your one-stop destination for the best online shopping experience.
              We offer a wide variety of products — from fashion and electronics to home essentials — all at unbeatable prices.
            </p>
            <p>
              Our mission is to make shopping simple, secure, and enjoyable. Whether you're buying for yourself or a loved one,
              we ensure fast delivery, quality assurance, and top-notch customer support.
            </p>
            <p>
              Thank you for choosing E-Shop. We look forward to serving you!
            </p>
          </Col>
          <Col md={6}>
            <Image src={aboutImage} alt="About E-Shop" fluid rounded />
          </Col>
        </Row>

        {/* Core Values */}
        <Row className="mb-5">
          <Col>
            <h3 className="text-center mb-4">Our Core Values</h3>
            <Row>
              <Col md={4}>
                <Card className="text-center p-3">
                  <Card.Body>
                    <Card.Title>Customer First</Card.Title>
                    <Card.Text>We put our customers at the heart of everything we do.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="text-center p-3">
                  <Card.Body>
                    <Card.Title>Quality Assurance</Card.Title>
                    <Card.Text>We ensure that every product meets high standards.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="text-center p-3">
                  <Card.Body>
                    <Card.Title>Innovation</Card.Title>
                    <Card.Text>We continually improve our platform for a better shopping experience.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Stats */}
        <Row className="text-center mb-5">
          <Col md={3}>
            <h4>1M+</h4>
            <p>Happy Customers</p>
          </Col>
          <Col md={3}>
            <h4>500K+</h4>
            <p>Products Sold</p>
          </Col>
          <Col md={3}>
            <h4>99%</h4>
            <p>Customer Satisfaction</p>
          </Col>
          <Col md={3}>
            <h4>24/7</h4>
            <p>Support</p>
          </Col>
        </Row>

        {/* Call to Action */}
        <Row className="text-center">
          <Col>
            <h4>Ready to start shopping?</h4>
            <p>Explore our wide range of products and enjoy exclusive deals today!</p>
            <a href="/home" className="btn btn-primary">Visit Shop</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
