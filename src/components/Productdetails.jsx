import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form, Spinner, Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { FaShoppingCart, FaBolt } from "react-icons/fa";
import { FaBackward } from "react-icons/fa6";


const Productdetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [products, setproducts] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => setproducts(res.data))
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  if (!products) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '70vh' }}>
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  const isClothing =
    products.category?.name?.toLowerCase().includes("clothing") ||
    products.title.toLowerCase().includes("shirt");

  const handleAddToCart = () => {
    let quantity = prompt("Enter quantity:", "1");
    if (!quantity || isNaN(quantity) || quantity <= 0) {
      alert("Please enter a valid quantity.");
      return;
    }

    if (isClothing && !selectedSize) {
      alert("Please select a size.");
      return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingIndex = cart.findIndex(
      (prod) => prod.id === products.id && prod.size === selectedSize
    );

    if (existingIndex !== -1) {
      cart[existingIndex].quantity += parseInt(quantity);
    } else {
      cart.push({
        id: products.id,
        title: products.title,
        price: products.price,
        quantity: parseInt(quantity),
        size: isClothing ? selectedSize : null,
        image: products.images?.[0],
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`✅ ${products.title} added to cart`);
    navigate('/cart');
  };

  const handleBuyNow = () => {
    if (isClothing && !selectedSize) {
      alert("Please select a size.");
      return;
    }

    const singleItem = {
      id: products.id,
      title: products.title,
      image: products.images?.[0],
      price: products.price,
      size: isClothing ? selectedSize : null,
      quantity: 1,
    };

    localStorage.setItem("buyNowItem", JSON.stringify(singleItem));
    navigate("/buy");
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="shadow-lg border-0 rounded-4 p-4">
            <Row>
              <Col md={5}>
                <Card.Img
                  variant="top"
                  src={products.images?.[0]}
                  alt={products.title}
                  style={{ borderRadius: '12px', objectFit: 'cover' }}
                />
              </Col>
              <Col md={7}>
                <Card.Body>
                  <h2 className="mb-3 fw-bold">{products.title}</h2>
                  <h4>
                    <Badge bg="success" className="fs-5">
                      ${products.price}
                    </Badge>
                  </h4>
                  <p className="text-muted mt-3">{products.description}</p>

                  {isClothing && (
                    <Form.Group controlId="sizeSelect" className="mb-3">
                      <Form.Label className="fw-semibold">Select Size</Form.Label>
                      <Form.Select
                        value={selectedSize}
                        onChange={(e) => setSelectedSize(e.target.value)}
                      >
                        <option value="">-- Choose Size --</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                      </Form.Select>
                    </Form.Group>
                  )}

                  <div className="d-flex gap-3 mt-4">
                    <Button variant="primary" size="lg" onClick={handleAddToCart}>
                      <FaShoppingCart className="me-2" />
                      Add to Cart
                    </Button>
<Button variant="warning" size="lg" onClick={handleBuyNow}>
  <FaBackward  className="me-2" />
  Buy Now
</Button>

                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Productdetails;
