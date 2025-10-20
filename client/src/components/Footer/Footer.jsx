import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import blackRoseLogo from '../../assets/black-rose.png';
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-custom">
      <Container>
        {/* Footer Top Navigation */}
        <Row className="py-4 footer-nav">
          <Col xs={12} md={3} className="mb-4 mb-md-0">
            <div className="social-links">
              <a href="#" className="me-3"><FaTwitter size={20} /></a>
              <a href="#" className="me-3"><FaInstagram size={20} /></a>
              <a href="#" className="me-3"><FaYoutube size={20} /></a>
              <a href="#"><FaLinkedin size={20} /></a>
            </div>
          </Col>
          
          <Col xs={6} md={3}>
            <h5>Products</h5>
            <ul className="list-unstyled">
              <li><a href="#">Cameras</a></li>
              <li><a href="#">Lenses</a></li>
              <li><a href="#">Optics</a></li>
              <li><a href="#">Accessories</a></li>
              <li><a href="#">Memory & Batteries</a></li>
              <li><a href="#">Bags, Cases & Housings</a></li>
            </ul>
          </Col>

          <Col xs={6} md={3}>
            <h5>Brands</h5>
            <ul className="list-unstyled">
              <li><a href="#">Canon</a></li>
              <li><a href="#">Nikon</a></li>
              <li><a href="#">Olympus</a></li>
              <li><a href="#">Sony</a></li>
              <li><a href="#">Panasonic</a></li>
              <li><a href="#">Fujifilm</a></li>
              <li><a href="#">Many More..</a></li>
            </ul>
          </Col>

          <Col xs={6} md={3}>
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li><Link to="/contact-us">Contact Us</Link></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Duty Free & TRS</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <Row className="align-items-center py-3 footer-bottom border-top">
          <Col xs={12} md={4} className="text-center text-md-start mb-2 mb-md-0">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start">
              <Image 
                src={blackRoseLogo} 
                alt="Black Rose Logo" 
                className="footer-logo me-2"
              />
              <span className="brand-name">Black Rose</span>
            </div>
          </Col>
          
          <Col xs={12} md={8} className="text-center text-md-end">
            <p className="acknowledgment mb-0">
              We acknowledge the Traditional Owners of Country throughout Australia
            </p>
            <small className="text-muted">
              &copy; {currentYear} Black Rose Group
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;