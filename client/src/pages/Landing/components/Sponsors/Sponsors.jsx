import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { sponsors } from '../../../../data/sponsors';
import './Sponsors.css';

function Sponsors() {
    return (
        <section className="sponsors-section">
            <Container>
                <h2 className="section-title">Our Partners</h2>
                <p className="section-subtitle">Proudly supported by industry leaders</p>
                <Row className="justify-content-center">
                    {sponsors.map((sponsor, index) => (
                        <Col key={index} xs={12} sm={6} md={4} className="mb-4">
                            <a 
                                href={sponsor.website} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="sponsor-card"
                            >
                                <div className="sponsor-logo">
                                    <img src={sponsor.logo} alt={`${sponsor.name} Logo`} />
                                </div>
                                <div className="sponsor-content">
                                    <h3>{sponsor.name}</h3>
                                    <p>{sponsor.description}</p>
                                </div>
                            </a>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default Sponsors;