import React, { useState } from 'react';
import "../css/contact.css";
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const { name, email, message } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      const option = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      };

      const res = await fetch('https://contact-us-c9ad4-default-rtdb.firebaseio.com/Messages.json', option);
      console.log(res);

      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
      navigate('/home');
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1 className="contact-title">Let’s Connect</h1>
        <p className="contact-subtitle">
          Got a question or proposal? Fill out the form and we’ll get back to you shortly.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            className="contact-input"
            value={name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            className="contact-input"
            value={email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="contact-textarea"
            value={message}
            onChange={handleChange}
          />
          <button type="submit" className="contact-button">Send Message</button>
        </form>
        <div className="contact-info">
          <p><strong>📍 Address:</strong> 123 Modern Blvd, Neon City</p>
          <p><strong>📧 Email:</strong> Eshop@gmail.com</p>
          <p><strong>📞 Phone:</strong> +1 (800) 123-4567</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
