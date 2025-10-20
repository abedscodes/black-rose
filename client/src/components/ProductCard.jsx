import React from "react";
import { Button } from 'react-bootstrap';
import defaultCamera from "../assets/brand-logos/default.png";
import CanonLogo from "../assets/brand-logos/Canon.svg";
import NikonLogo from "../assets/brand-logos/Nikon.jpg";
import FujifilmLogo from "../assets/brand-logos/Fujifilm.png";
import SonyLogo from "../assets/brand-logos/Sony.svg";
import PanasonicLogo from "../assets/brand-logos/Panasonic.svg";
import OlympusLogo from "../assets/brand-logos/Olympus.svg";
import LeicaLogo from "../assets/brand-logos/Leica.jpg";
import DJILogo from "../assets/brand-logos/DJI.png";
import GoProLogo from "../assets/brand-logos/GoPro.png";


import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ id,image,name,price, brand }) => {
  // const getBrandLogo = (brand) => {
  //   const logos = {
  //     Canon: CanonLogo,
  //     Nikon: NikonLogo,
  //     Fujifilm: FujifilmLogo,
  //     Sony: SonyLogo,
  //     Panasonic: PanasonicLogo,
  //     Olympus: OlympusLogo,
  //     Leica: LeicaLogo,
  //     GoPro: GoProLogo,
  //     DJI : DJILogo,
  //     Other: defaultCamera,

  //   };
  //   return logos[brand.charAt(0).toUpperCase() + brand.slice(1).toLowerCase()] || null;
  // };

  return (
    <Link to={`/products/${id}`}>
      <div className="product-card">
        <div className="product-content">
          <div className="product-image">
            <img
              className="hover:scale-110 transition ease-in-out"
              src={image[0]}
              alt=""
            />
          </div>
          <div className="product-details">
            {/* <div className="product-brand-logo">
              {getBrandLogo(brand) && (
                <img src={getBrandLogo(brand)} alt={brand} />
              )}
            </div> */}
            <p className="product-name">{name}</p>
          </div>
        </div>
        <div className="product-footer">
          <p className="product-price">${price.toFixed(2)}</p>
          <Button variant="dark" size="sm" className="action-button">
            Add to Cart
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;