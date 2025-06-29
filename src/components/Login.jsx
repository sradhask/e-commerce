import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "./firebase";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [store, setStore] = useState({ email: "", password: "" });

  const getinput = (e) => {
    setStore({
      ...store,
      [e.target.name]: e.target.value,
    });
  };

  const Submitdata = async (e) => {
    e.preventDefault();
    const { email, password } = store;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success(" login successful!");
      navigate("/home");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Poppins', sans-serif",
        padding: "20px",
      }}
    >
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animated-form {
            animation: fadeInUp 0.8s ease forwards;
          }

          .form-control {
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
          }

          .form-control:focus {
            border-color: #ff4081 !important;
            box-shadow: 0 0 8px rgba(255, 64, 129, 0.6);
          }

          .btn-custom {
            transition: background-color 0.3s ease, box-shadow 0.3s ease;
          }

          .btn-custom:hover {
            background-color: #e73370 !important;
            box-shadow: 0 8px 20px rgba(231, 51, 112, 0.6);
          }

          a.custom-link {
            color: #ff4081;
            font-weight: 600;
            text-decoration: none;
            transition: text-decoration 0.3s ease;
          }

          a.custom-link:hover {
            text-decoration: underline;
          }
        `}
      </style>

      <Form
        className="animated-form"
        style={{
          background: "#fff",
          padding: "40px 30px",
          borderRadius: "20px",
          boxShadow:
            "0 10px 30px rgba(0, 0, 0, 0.1), 0 6px 10px rgba(0, 0, 0, 0.08)",
          maxWidth: "400px",
          width: "100%",
        }}
        onSubmit={Submitdata}
      >
        <h2
          style={{
            fontWeight: "700",
            marginBottom: "30px",
            color: "#ff4081",
            textAlign: "center",
            letterSpacing: "1.5px",
          }}
        >
          Welcome Back
        </h2>

        <Form.Group className="mb-4" controlId="formEmail">
          <Form.Label
            style={{ fontWeight: "600", fontSize: "14px", color: "#333" }}
          >
            Email Address
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="you@example.com"
            className="form-control"
            style={{
              borderRadius: "12px",
              border: "1.8px solid #ddd",
              padding: "14px 18px",
              fontSize: "16px",
            }}
            name="email"
            value={store.email}
            onChange={getinput}
          />
        </Form.Group>

        <Form.Group className="mb-5" controlId="formPassword">
          <Form.Label
            style={{ fontWeight: "600", fontSize: "14px", color: "#333" }}
          >
            Password
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            className="form-control"
            style={{
              borderRadius: "12px",
              border: "1.8px solid #ddd",
              padding: "14px 18px",
              fontSize: "16px",
            }}
            name="password"
            value={store.password}
            onChange={getinput}
          />
        </Form.Group>

        <Button
          type="submit"
          className="btn-custom"
          style={{
            background: "#ff4081",
            border: "none",
            borderRadius: "12px",
            padding: "14px",
            fontWeight: "700",
            fontSize: "18px",
            width: "100%",
            cursor: "pointer",
            boxShadow: "0 6px 15px rgba(255, 64, 129, 0.4)",
          }}
        >
          Login
        </Button>

        <p
          style={{
            marginTop: "20px",
            fontSize: "14px",
            textAlign: "center",
            color: "#666",
          }}
        >
          Don’t have an account?{" "}
          <Link to="/signup" className="custom-link">
            Sign up
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default Login;
