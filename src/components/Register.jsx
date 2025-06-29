import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { auth, db } from './firebase';
import { doc, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

const Register = () => {
  const navigate = useNavigate();
  const [input, setinput] = useState({ firstname: "", lastname: "", email: "", password: "" });

  const getinput = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  const Submitdata = async (e) => {
    e.preventDefault();
    const { email, password } = input;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstname: input.firstname,
          lastname: input.lastname,
        });
      }

      console.log("The user is Registered Successfully !!");

      toast.success("User Registration is successfully!", {
        position: 'top-center',
      });

      navigate('/login');
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: 'bottom-center',
      });
    }
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Poppins', sans-serif",
        padding: "20px",
      }}
    >
      <style>{`
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
          border-radius: 12px !important;
          border: 1.8px solid #ddd !important;
          padding: 14px 18px !important;
          font-size: 16px !important;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .form-control:focus {
          border-color: #ff4081 !important;
          box-shadow: 0 0 8px rgba(255, 64, 129, 0.6) !important;
          outline: none !important;
        }

        .btn-custom {
          background: #ff4081;
          border: none;
          border-radius: 12px;
          padding: 14px;
          font-weight: 700;
          font-size: 18px;
          width: 100%;
          cursor: pointer;
          box-shadow: 0 6px 15px rgba(255, 64, 129, 0.4);
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
          color: white;
        }

        .btn-custom:hover {
          background-color: #e73370;
          box-shadow: 0 8px 20px rgba(231, 51, 112, 0.6);
        }

        form {
          background: #fff;
          padding: 40px 30px;
          border-radius: 20px;
          box-shadow:
            0 10px 30px rgba(0, 0, 0, 0.1),
            0 6px 10px rgba(0, 0, 0, 0.08);
          max-width: 400px;
          width: 100%;
        }

        label {
          font-weight: 600;
          font-size: 14px;
          color: #333;
        }

        h2 {
          font-weight: 700;
          margin-bottom: 30px;
          color: #ff4081;
          text-align: center;
          letter-spacing: 1.5px;
        }
      `}</style>

      <Form className="animated-form" onSubmit={Submitdata}>
        <h2>Register</h2>

        <Form.Group className="mb-3" controlId="formFirstName">
          <Form.Label>First name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your first name"
            name="firstname"
            value={input.firstname}
            onChange={getinput}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLastName">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your last name"
            name="lastname"
            value={input.lastname}
            onChange={getinput}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            name="email"
            value={input.email}
            onChange={getinput}
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={input.password}
            onChange={getinput}
          />
        </Form.Group>

        <button type="submit" className="btn-custom">
          Submit
        </button>
      </Form>
    </div>
  );
};

export default Register;
