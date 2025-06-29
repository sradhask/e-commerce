import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log("Loaded cart from localStorage:", cart);
    setCartItems(cart);
  }, []);

  const increaseQty = (id, size) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === id && item.size === size) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQty = (id, size) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === id && item.size === size && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleRemove = (id, size) => {
    const updatedCart = cartItems.filter(item => !(item.id === id && item.size === size));
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const payment =()=>{
    navigate('/payment')
  }

  return (
    <Container className="mt-4">
      <Button variant="secondary" onClick={() => navigate('/home')} className="mb-3">
        ← Back to Home
      </Button>

      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <Row key={`${item.id}-${item.size}`} className="align-items-center mb-3">
            <Col md={2}>
              <Image src={item.image} fluid />
            </Col>
            <Col md={4}>
              <h5>{item.title}</h5>
              {item.size && <p>Size: {item.size}</p>}
            </Col>
            <Col md={2}>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => decreaseQty(item.id, item.size)}
              >
                -
              </Button>
              <span style={{ margin: "0 10px" }}>{item.quantity}</span>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => increaseQty(item.id, item.size)}
              >
                +
              </Button>
            </Col>
            <Col md={2}>${(item.price * item.quantity).toFixed(2)}</Col>
            <Col md={2}>
              <Button
                variant="danger"
                onClick={() => handleRemove(item.id, item.size)}
              >
                Remove
              </Button>


            </Col>
          </Row>
        ))
      )}

      <hr />
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <h4>Total product price: {totalPrice.toFixed(2)}</h4>
  <Button onClick={payment}
    variant="danger"
    style={{
      borderRadius: '5px',
      height: '40px',
      width: '100px',
      color: 'white',
      border: 'none',
      marginRight:'70px'
    }}
  >
    Continue
  </Button>
</div>
    </Container>
  );
};

export default Cart;
