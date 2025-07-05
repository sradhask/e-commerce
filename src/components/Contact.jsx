import React, { useState } from 'react';
import '../css/contact.css';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const [loading, setLoading] = useState(false); // ✅ loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert('Please fill in all required fields.');
      return;
    }

    setLoading(true); // ✅ start loading

    try {
      const option = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(formData)
      };

      const res = await fetch('https://contact-us-c9ad4-default-rtdb.firebaseio.com/Messages.json', option);
      console.log(res);

      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: ''
      });

      alert('Message sent successfully!');

      // ✅ Delay before navigation to avoid UX flicker
      setTimeout(() => {
        navigate('/contact');
      }, 1000);
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Something went wrong. Please try again.");
    }

    setLoading(false); // ✅ end loading
  };

  return (
    <div className="modern-contact">
      <div className="contact-left-info">
        <h1>Contact</h1>

        <div className="enquiry-buttons">
          <button className="active">Retail Enquiries</button>
          <button className="disabled">Join Mailing List</button>
        </div>

        <address>
          <p>ADDRESS</p>
          <p>206 Blenheim Way<br />Unit 2-C<br />Concord, ON, Canada<br />L4K 4P4</p>
        </address>
      </div>

      <form className="contact-form-modern" onSubmit={handleSubmit}>
        <div className="row">
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="row">
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        </div>
        <p className="line-label">Want to know more? Drop us a line!</p>
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange}></textarea>

        <div className="bottom-row">
          <button type="submit" className="send-button" disabled={loading}>
            {loading ? 'Sending...' : 'Send'}
          </button>
       

        </div>
      </form>
    </div>
  );
};

export default Contact;
