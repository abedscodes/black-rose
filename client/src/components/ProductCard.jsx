import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";


import "./ProductCard.css";

const ProductCard = ({ id,image,name,price, brand }) => {
  const { addToCart, currency } = useContext(ShopContext);
  const handleAddToCart = (e) => {
    e.preventDefault(); // prevents Link navigation when clicking the icon
    addToCart(id);
    toast.success("Added to cart!");


  };

  return (
<div className="product-card">
      <Link to={`/products/${id}`}>
        <div className="product-content">
          <div className="product-image">
            <img
              className="hover:scale-110 transition ease-in-out"
              src={image[0]}
              alt={name}
            />
          </div>
          <div className="product-details">
            <p className="product-name">{name}</p>
          </div>
        </div>
      </Link>

      <div className="product-footer flex items-center justify-between">
        <p className="product-price">
          {currency}
          {price.toFixed(2)}
        </p>
        <div className="flex gap-2">
          <Link to={`/products/${id}`}>
            <Button variant="dark" size="sm" className="action-button">
              View
            </Button>
          </Link>
          <button
            onClick={handleAddToCart}
            className="bg-black hover:bg-gray-800 text-white p-2 rounded"
            title="Add to Cart"
          >
            <FaShoppingCart size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;