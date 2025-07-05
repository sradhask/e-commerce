import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Wishlist = () => {
  const navigate = useNavigate();
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistItems(storedWishlist);
  }, []);

  // 🟢 Navigate to product detail
  const add = (id) => {
    navigate(`/productdetails/${id}`);
  };

  // 🔴 Remove item and stop event from bubbling to Card
  const handleRemove = (e, id) => {
    e.stopPropagation(); // ⛔ Prevent card click
    const updated = wishlistItems.filter(item => item.id !== id);
    localStorage.setItem("wishlist", JSON.stringify(updated));
    setWishlistItems(updated);
  };

  return (
    <Container className="mt-4">
      <h2>Your Wishlist</h2>

      <Row className="g-4">
        {wishlistItems.length === 0 ? (
          <p>No items in wishlist.</p>
        ) : (
          wishlistItems.map(item => (
            <Col key={item.id} sm={6} md={4} lg={3}>
              <Card
                onClick={() => add(item.id)}
                style={{ width: '100%', height: '400px', cursor: 'pointer' }}
              >
                <Card.Img
                  variant="top"
                  src={item.image || 'https://via.placeholder.com/150'}
                  height={180}
                  style={{ objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>${item.price}</Card.Text>
                  <Button  className="mt-auto" 
                    variant="danger"
                    onClick={(e) => handleRemove(e, item.id)}
                  >
                    Remove
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Wishlist;
