import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../../../../components/ProductCard';
import './FeaturedProducts.css';

const FeaturedProducts = ({ title, products }) => {
  return (
    <section className="product-section">
      <Container>
        <h2 className="section-title">{title}</h2>
        <Row className="product-grid">
          {/* {products.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="product-item">
              <ProductCard product={product} />
            </Col>
          ))} */}
        </Row>
      </Container>
    </section>
  );
};

export default FeaturedProducts;