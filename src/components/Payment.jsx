import React, { useState } from "react";
import { Container, Card, Button, Row, Col, Alert } from "react-bootstrap";
import imag1 from "../images/gpy-removebg-preview.png"
import { useNavigate } from "react-router-dom";

const paymentOptions = [
  {
    id: "googlepay",
    label: "Google Pay",
    icon: imag1,
    description: "Fast and secure payments with Google Pay.",
  },
  {
    id: "cod",
    label: "Cash on Delivery",
    icon: "https://cdn-icons-png.flaticon.com/512/987/987582.png",
    description: "Pay with cash when your order arrives.",
  },
  {
    id: "card",
    label: "Credit/Debit Card",
    icon: "https://cdn-icons-png.flaticon.com/512/196/196561.png",
    description: "Pay securely using your card.",
  },
];


const Payment = () => {
  const [selected, setSelected] = useState("");
  const [success, setSuccess] = useState(false);
 

  const handleContinue = () => {
    if (!selected) {
      alert("Please select a payment method.");
      return;
    
    }
    setSuccess(true);
    // You can also clear cart/localStorage here if needed
  };

  if (success) {
    return (
      <Container className="d-flex flex-column justify-content-center align-items-center" style={{ height: "80vh" }}>
        <div className="text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
            alt="success"
            style={{ width: 120, marginBottom: 20 }}
          />
          <h2 className="mb-3 text-success">Payment Successful!</h2>
          <p>Your order has been placed successfully. Thank you for shopping with us.</p>
          <Button variant="primary" onClick={() => window.location.href = "/home"}>
            Back to Home
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <Container style={{ maxWidth: 600, marginTop: 50 }}>
      <h2 className="mb-4">Choose Payment Method</h2>
      <Row className="gy-3">
        {paymentOptions.map((option) => (
          <Col xs={12} key={option.id}>
            <Card
              onClick={() => setSelected(option.id)}
              border={selected === option.id ? "primary" : ""}
              className="d-flex flex-row align-items-center p-3"
              style={{ cursor: "pointer", boxShadow: selected === option.id ? "0 0 10px #007bff" : "none" }}
            >
              <img
                src={option.icon}
                alt={option.label}
                style={{ width: 50, height: 50, marginRight: 20 }}
              />
              <div>
                <h5>{option.label}</h5>
                <small className="text-muted">{option.description}</small>
              </div>
              <div style={{ marginLeft: "auto" }}>
                {selected === option.id && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="blue"
                    className="bi bi-check-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.97 11.03a.75.75 0 0 0 1.07 0L12.03 7a.75.75 0 1 0-1.06-1.06L7.5 9.44 5.97 7.91a.75.75 0 1 0-1.06 1.06l2 2z" />
                  </svg>
                )}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <Button
        variant="primary"
        size="lg"
        block
        className="mt-4"
        onClick={handleContinue}
        disabled={!selected}
      >
        Continue
      </Button>
    </Container>
  );
};

export default Payment;