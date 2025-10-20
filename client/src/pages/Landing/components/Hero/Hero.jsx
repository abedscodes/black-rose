import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Row, Col } from 'react-bootstrap';
import heroImage from '../../../../assets/hero-image.jpg';
import './Hero.css';

const Hero = ({ onViewBrands }) => {
  return (
    <section className="hero-section" style={{'--hero-image': `url(${heroImage})`}}>
      <div className="hero-overlay"></div>
      <Container className="position-relative">
        <Row className="align-items-center">
          <Col lg={8} className="hero-content text-white">
            <h1 className="hero-title">Capture Every Moment</h1>
            <p className="hero-subtitle">Professional Camera Equipment & Expert Advice</p>
            <p className="hero-description">
              Discover our extensive range of cameras, lenses, and accessories from leading brands.
              Whether you're a professional photographer or just starting out, we have the perfect gear for you.
            </p>
            <div className="hero-cta">
              <Link to="/products" className="hero-button">
                <Button variant="light" size="lg">Shop Now</Button>
              </Link>
              <Button 
                variant="outline-light" 
                size="lg" 
                onClick={onViewBrands}
              >
                View Brands
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;