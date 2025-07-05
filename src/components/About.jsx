import React from 'react';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import aboutImage1 from '../images/ecom2.jpg';
import aboutImage2 from "../images/Blog_eCommerce_060120_WP-2.png"
import aboutImage3 from '../images/online-shopping-and-e-commerce-banner-vector.jpg';

const About = () => {
  return (
    <div style={{ backgroundColor: '#fefefe', padding: '60px 0' }}>
      <Container>
      

        {/* Vision Section */}
        <Row className="align-items-center ">
         
          <Col md={6}style={{marginBottom:'30px'}}>
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
            <Image src={aboutImage1} alt="About E-Shop" fluid rounded className="shadow" />
          </Col>
        </Row>

        {/* Mission Section */}
        <Row className="align-items-center flex-md-row-reverse mb-5">
          <Col md={6}>
            <h3 className="fw-semibold mb-3">Our Mission</h3>
            <p className="text-muted">
              To redefine online retail by focusing on customer satisfaction, quality products, and innovation.
            </p>
            <p className="text-muted">
              We strive to make shopping not just easy, but enjoyable for everyone.
            </p>
          </Col>
          <Col md={6}>
            <Image src={aboutImage2} alt="Our Mission" fluid rounded className="shadow" style={{marginTop:'50px'}}/>
          </Col>
        </Row>

        {/* Process Section */}
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <h3 className="fw-semibold mb-3">Our Process</h3>
            <p className="text-muted">
              We carefully select products that meet our strict quality standards.
            </p>
            <p className="text-muted">
              Every order is handled with care, delivered promptly, and supported by our 24/7 team.
            </p>
          </Col>
          <Col md={6}>
            <Image src={aboutImage3} alt="Our Process" fluid rounded className="shadow" />
          </Col>
        </Row>

        {/* Core Values */}
        <h3 className="text-center mb-4">Our Core Values</h3>
        <Row className="mb-5">
          {[
            {
              title: 'Customer First',
              text: 'We put our customers at the heart of everything we do.'
            },
            {
              title: 'Quality Assurance',
              text: 'We ensure that every product meets high standards.'
            },
            {
              title: 'Innovation',
              text: 'We continually improve our platform for a better shopping experience.'
            }
          ].map((value, idx) => (
            <Col md={4} key={idx}>
              <Card className="text-center p-4 shadow-sm border-0 h-100 hover-shadow">
                <Card.Body>
                  <Card.Title>{value.title}</Card.Title>
                  <Card.Text>{value.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Stats Section */}
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
        <div className="text-center">
          <h4 className="mb-2">Ready to start shopping?</h4>
          <p>Explore our wide range of products and enjoy exclusive deals today!</p>
          <Button variant="primary" size="lg" href="/home">
            Visit Shop
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default About;
