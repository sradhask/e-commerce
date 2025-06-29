import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Form,
  Card,
  Badge,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaMinus, FaPlus, FaCheckCircle } from "react-icons/fa";

const Buynow = () => {
  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedItem = JSON.parse(localStorage.getItem("buyNowItem"));
    if (storedItem) {
      setItem(storedItem);
      setQuantity(storedItem.quantity || 1);
      setSize(storedItem.size || "");
    }
  }, []);

  if (!item) {
    return (
      <Container className="mt-5 text-center">
        <h3>No item selected for purchase.</h3>
      </Container>
    );
  }

  const totalPrice = (item.price * quantity).toFixed(2);

  const payment = () => {
    navigate("/payment");
  };

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card className="shadow-lg p-4 rounded-4" style={{ maxWidth: "800px", width: "100%" }}>
        <h2 className="mb-4 text-center fw-bold text-primary">Confirm Your Purchase</h2>
        <Row>
          <Col md={5} className="text-center">
            <Image
              src={item.image}
              alt={item.title}
              fluid
              className="rounded-3 shadow-sm"
              style={{ maxHeight: "320px", objectFit: "cover" }}
            />
          </Col>

          <Col md={7}>
            <div className="d-flex flex-column h-100 justify-content-between">
              <div>
                <h4 className="fw-semibold mb-2">{item.title}</h4>
                {item.size && (
                  <Badge bg="info" className="mb-3 px-3 py-2 fs-6">
                    Size: {size}
                  </Badge>
                )}

                <Form.Group className="mb-4">
                  <Form.Label className="fw-medium">Quantity</Form.Label>
                  <div className="d-flex align-items-center gap-3">
                    <Button
                      variant="outline-secondary"
                      onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                      className="rounded-circle"
                    >
                      <FaMinus />
                    </Button>
                    <span className="fs-5">{quantity}</span>
                    <Button
                      variant="outline-secondary"
                      onClick={() => setQuantity(quantity + 1)}
                      className="rounded-circle"
                    >
                      <FaPlus />
                    </Button>
                  </div>
                </Form.Group>

                <h5 className="fw-bold mt-4">
                  Total: <span className="text-success">₹{totalPrice}</span>
                </h5>
              </div>

              <div className="mt-4">
                <Button
                  variant="success"
                  size="lg"
                  className="w-100 d-flex align-items-center justify-content-center gap-2"
                  onClick={payment}
                >
                  <FaCheckCircle />
                  Confirm Purchase
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Buynow;
