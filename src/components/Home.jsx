import React, { useEffect, useState } from 'react';
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  Toast,
  ToastContainer,
  Image,
  Carousel,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import tes1 from "../images/photo_6242437001836088982_y.jpg";
import test2 from "../images/photo_6242437001836088985_y.jpg";
import NavbarComponent from './Navbar';
import "../css/Home.css";
import { FaHeart, FaStar } from "react-icons/fa";
import test3 from "../images/women.webp";
import test4 from "../images/man.jpg";
import test5 from "../images/Formal-Ladies-Dress-Suits-for-Women-Business-Suits-Blazer-and-Jacket-Sets-Office-Uniforms-Styles-Blue.webp"
import test6 from "../images/R.jpeg"
import test7 from "../images/home.webp";
import test8 from "../images/kids.webp";
import test9 from"../images/violet-blended-cotton-chikankari-knee-length-kurti-kruhoa020-u.jpg";
import tes10 from "../images/5VfEG6.jpg";
import test11 from "../images/e5d5c6c3f7ec4f6a8e2fd2d88f4cc54e49f90912.avif";
import test12 from "../images/bag.jpg";
const Home = () => {
  const navigate = useNavigate();
  const [first, setfirst] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistItems, setWishlistItems] = useState([]);


  const images = [tes1, test2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(totalQty);

    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistItems(wishlist);
  }, []);

useEffect(() => {
  axios.get("https://api.escuelajs.co/api/v1/products")
    .then((res) => {
      setfirst(res.data);
      console.log("Fetched products:", res.data);
    })
    .catch((err) => console.error("Error fetching products:", err));
}, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleAddToWishlist = (item) => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const alreadyIn = wishlist.find(prod => prod.id === item.id);
    if (!alreadyIn) {
      const now = new Date();
      const timestamp = now.toLocaleString();

      wishlist.push({
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.images?.[0],
        savedAt: timestamp
      });
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      setWishlistItems(wishlist);
      setToastMessage(`✅ Product saved in your wishlist at ${timestamp}`);
      setShowToast(true);
    } else {
      setToastMessage(`ℹ️ ${item.title} is already in your wishlist.`);
      setShowToast(true);
    }
  };

  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Verified Buyer",
      img: test6,
      text: "E-Shop made online shopping so easy. The delivery was fast, the product quality exceeded my expectations, and I absolutely love the stylish collection. Highly recommended!",
      rating: 5,
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Verified Buyer",
      img: test3,
      text: "Fantastic experience! The customer support was very helpful, and the product arrived on time. Will definitely shop again.",
      rating: 4,
    },
    {
      id: 3,
      name: "Anita Singh",
      role: "Verified Buyer",
      img: test5,
      text: "Quality products at reasonable prices. The website is easy to navigate and the checkout process is smooth. Love it!",
      rating: 5,
    },
    {
      id: 4,
      name: "Vikram Patel",
      role: "Verified Buyer",
      img: test4,
      text: "Good variety of products and timely delivery. The packaging was secure and the products were exactly as described.",
      rating: 4,
    },
  ];

   const image = [
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300/0000FF',
    'https://via.placeholder.com/300/FF0000'
  ];
 const roundedImages = [
  { src: test7, label: "Home Appliance"},
  { src: test8, label: "Kids" },
  { src: test9, label: "Women" },
  { src: tes10, label: "Fashion" },
  { src: test11, label: "Men" },
  { src: test12, label: "Bags" },
];


  return (
    <div>
      <NavbarComponent cartCount={cartCount} />
<img
  src={images[currentImageIndex]}
  alt="slider"
  className="slider-image"
/>




         <div>
   <div className="d-flex flex-wrap gap-5 justify-content-center my-5">
  {roundedImages.map(({ src, label }, idx) => (
    <div key={idx} className="text-center">
      <Image
  src={src}
  roundedCircle
  alt={label}
  width={150}
  height={150}
  style={{
    objectFit: 'cover',
    cursor: 'pointer',
    border: '1px solid #ccc',
  }}
/>

      <div style={{ marginTop: '8px', fontWeight: 'bold' }}>{label}</div>
    </div>
  ))}
</div>



      </div>

      {/* ✅ Styled Shop Now heading */}
      <h1 className="shop-now-heading">Shop Now</h1>

      <Container className="mt-4">
        <Row>
          {first.map((item) => (
            <Col key={item.id} sm={6} md={4} lg={3} className="mb-4 d-flex">
              <Card onClick={() => navigate(`/productdetails/${item.id}`)} style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
                <Card.Img
                  variant="top"
                  src={item.images?.[0] || "https://via.placeholder.com/150"}
                  height={180}
                  style={{ objectFit: 'cover' }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.title}</Card.Title>
                  <Card.Text>Rs {item.price}</Card.Text>
                  <h6>Free Delivery</h6>
                  <div className="mt-auto" style={{ textAlign: 'center', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <FaHeart
                      style={{ cursor: 'pointer', color: wishlistItems.find(w => w.id === item.id) ? 'red' : '#ff80ab', fontSize: '22px' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToWishlist(item);
                      }}
                      title={wishlistItems.find(w => w.id === item.id) ? "In Wishlist" : "Add to Wishlist"}
                    />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <ToastContainer position="top-end" className="p-3" style={{ zIndex: 9999 }}>
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={3000}
          autohide
          bg={toastMessage.startsWith('✅') ? 'success' : toastMessage.startsWith('❤️') ? 'danger' : 'info'}
        >
          <Toast.Body style={{ color: 'white' }}>{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
      
   

      <div className="container py-5">
        <Container className="my-5">
          <h2 className="text-center mb-4">What Our Customers Say</h2>
          <Row className="justify-content-center">
            {reviews.map(({ id, name, role, img, text, rating }) => (
              <Col key={id} md={6} lg={6} className="mb-4">
                <Card className="shadow p-4 h-100 d-flex flex-column">
                  <div className="d-flex align-items-center mb-3">
                    <Image 
                      src={img} 
                      roundedCircle 
                      width="70" 
                      height="70" 
                      alt={name}
                    />
                    <div className="ms-3">
                      <h5 className="mb-0">{name}</h5>
                      <small className="text-muted">{role}</small>
                    </div>
                  </div>
                  <Card.Text className="mb-3 flex-grow-1">"{text}"</Card.Text>
                  <div className="text-warning mt-auto">
                    {[...Array(rating)].map((_, idx) => (
                      <FaStar key={idx} />
                    ))}
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;