import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './TopBrands.css';

// Import logos
import sonyLogo from '../../../../assets/brand-logos/Sony.svg';
import canonLogo from '../../../../assets/brand-logos/Canon.svg';
import nikonLogo from '../../../../assets/brand-logos/Nikon.jpg';
import fujifilmLogo from '../../../../assets/brand-logos/Fujifilm.png';
import panasonicLogo from '../../../../assets/brand-logos/Panasonic.svg';

const brands = [
    { name: 'Sony', logo: sonyLogo },
    { name: 'Canon', logo: canonLogo },
    { name: 'Nikon', logo: nikonLogo },
    { name: 'Fujifilm', logo: fujifilmLogo },
    { name: 'Panasonic', logo: panasonicLogo },
];

function TopBrands() {
    return (
        <section className="top-brands-section">
            <Container>
                <h2 className="top-brands-title">Top Brands</h2>
                <Row>
                    <Col md={9}>
                        <Row className="justify-content-start">
                            {brands.slice(0, 3).map((brand, index) => (
                                <Col key={index} xs={12} md={4} className="mb-5">
                                    <Link
                                        to={`/brand/${brand.name.toLowerCase()}`}
                                        className="top-brands-logo"
                                    >
                                        <img src={brand.logo} alt={`${brand.name} Logo`} />
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                        <Row className="justify-content-start">
                            {brands.slice(3).map((brand, index) => (
                                <Col key={index} xs={12} md={4} className="mb-5">
                                    <Link
                                        to={`/brand/${brand.name.toLowerCase()}`}
                                        className="top-brands-logo"
                                    >
                                        <img src={brand.logo} alt={`${brand.name} Logo`} />
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                    <Col md={3}>
                        <div className="explore-more">
                            <div className="explore-content">
                                <Link to="/products">
                                    <h3>Explore All →</h3>
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default TopBrands;
