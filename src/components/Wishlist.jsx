import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Wishlist = () => {
  const navigate=useNavigate();
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistItems(storedWishlist);
  }, []);

  const handleRemove = (id) => {
    const updated = wishlistItems.filter(item => item.id !== id);
    localStorage.setItem("wishlist", JSON.stringify(updated));
    setWishlistItems(updated);
  };
  
  return (
    <Container className="mt-4">
      <h2>Your Wishlist</h2>
      
      <Row>
        {wishlistItems.length === 0 ? (
          <p>No items in wishlist.</p>
        ) : (
          wishlistItems.map(item => (
            <Col key={item.id} sm={6} md={4} lg={3} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={item.image || 'https://via.placeholder.com/150'}
                  height={180}
                
                  style={{ objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>${item.price}</Card.Text>
                  <Button variant="danger" onClick={() => handleRemove(item.id)}>
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
