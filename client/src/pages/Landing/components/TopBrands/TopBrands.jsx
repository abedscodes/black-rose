// import React, { useContext } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import './TopBrands.css';
// import { useNavigate } from 'react-router-dom';

// // Import logos
// import sonyLogo from '../../../../assets/brand-logos/SONY.svg';
// import canonLogo from '../../../../assets/brand-logos/Canon.svg';
// import nikonLogo from '../../../../assets/brand-logos/Nikon.jpg';
// import fujifilmLogo from '../../../../assets/brand-logos/Fujifilm.png';
// import panasonicLogo from '../../../../assets/brand-logos/Panasonic.svg';
// import { ShopContext } from '../../../../context/ShopContext';

// const brands = [
//     { name: 'Sony', logo: sonyLogo },
//     { name: 'Canon', logo: canonLogo },
//     { name: 'Nikon', logo: nikonLogo },
//     { name: 'Fujifilm', logo: fujifilmLogo },
//     { name: 'Panasonic', logo: panasonicLogo },
// ];

// function TopBrands() {
//     const { applyBrandFilter } = useContext(ShopContext);


//     const handleBrandClick = (brand) => {
//         applyBrandFilter(brand);}
//     return (
//         <section className="top-brands-section">
//             <Container>
//                 <h2 className="top-brands-title">Top Brands</h2>
//                 <Row>
//                     <Col md={9}>
//                         <Row className="justify-content-start">
//                             {brands.slice(0, 3).map((brand, index) => (
//                                 <Col key={index} xs={12} md={4} className="mb-5">
//                                     <div className="top-brands-logo" onClick={() => handleBrandClick(brand.name)}>
//                                         <img src={brand.logo} alt={`${brand.name} Logo`} />
//                                     </div>
//                                 </Col>
//                             ))}
//                         </Row>
//                         <Row className="justify-content-start">
//                             {brands.slice(3).map((brand, index) => (
//                                 <Col key={index} xs={12} md={4} className="mb-5">
//                                     <div className="top-brands-logo" onClick={() => handleBrandClick(brand.name)}>
//                                         <img src={brand.logo} alt={`${brand.name} Logo`} />
//                                     </div>
//                                 </Col>
//                             ))}
//                         </Row>
//                     </Col>
//                     <Col md={3}>
//                         <div className="explore-more">
//                             <span className="info-icon">ⓘ</span>
//                             <div className="explore-content">
//                                 <h3>Explore All →</h3>
//                             </div>
//                         </div>
//                     </Col>
//                 </Row>
//             </Container>
//         </section>
//     );
// }

// export default TopBrands;


import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ShopContext } from '../../../../context/ShopContext';
import './TopBrands.css';

// Import logos
import sonyLogo from '../../../../assets/brand-logos/SONY.svg';
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
    const { applyBrandFilter } = useContext(ShopContext);

    const handleBrandClick = (brand) => {
        applyBrandFilter(brand);
    };

    return (
        <section className="top-brands-section">
            <Container>
                <h2 className="top-brands-title">Top Brands</h2>
                <Row>
                    <Col md={9}>
                        <Row className="justify-content-start">
                            {brands.slice(0, 3).map((brand, index) => (
                                <Col key={index} xs={12} md={4} className="mb-5">
                                    <div className="top-brands-logo" onClick={() => handleBrandClick(brand.name)}>
                                        <img src={brand.logo} alt={`${brand.name} Logo`} />
                                    </div>
                                </Col>
                            ))}
                        </Row>
                        <Row className="justify-content-start">
                            {brands.slice(3).map((brand, index) => (
                                <Col key={index} xs={12} md={4} className="mb-5">
                                    <div className="top-brands-logo" onClick={() => handleBrandClick(brand.name)}>
                                        <img src={brand.logo} alt={`${brand.name} Logo`} />
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                    <Col md={3}>
                        <div className="explore-more">
                            <span className="info-icon">ⓘ</span>
                            <div className="explore-content">
                                <h3>Explore All →</h3>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default TopBrands;