import React, { useRef } from 'react';
import Sponsors from './components/Sponsors/Sponsors';
import Hero from './components/Hero/Hero';
// import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';
import TopBrands from './components/TopBrands/TopBrands';
// import { sections } from '../../data/products';
import LatestCollection from '../../components/LatestCollection';
import PopularProducts from "../../components/PopularProducts";

function Landing() {
    const brandsRef = useRef(null);

    const scrollToBrands = () => {
        brandsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Hero onViewBrands={scrollToBrands} />
            <LatestCollection />
            <PopularProducts />
            {/* {Object.entries(sections).map(([key, section]) => (
                <FeaturedProducts 
                    key={key}
                    title={section.title}
                    // products={products.filter(section.filter).slice(0, 4)}
                    // viewAllLink={section.viewAllLink} 
                />
            ))} */}
            <div ref={brandsRef}>
                <TopBrands />
            </div>
            <Sponsors />
        </>
    );
}
    
export default Landing;