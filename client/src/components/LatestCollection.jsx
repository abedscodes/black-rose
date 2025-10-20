import React, { useEffect, useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
// import ProductItem from "./ProductItem";
import ProductCard from "./ProductCard";


const LatestCollection = () => {
  const { products } = useContext(ShopContext);

  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 5));
  }, [products]);

  // console.log(products);

  return (
    <div className="my-10 px-15 sm:px-[5vw] md:px-[7vw] lg:px-[9vw">
      <div className="text-center py-8 text-3x1">
       <h2 className="section-title">LATEST COLLECTION</h2>
      </div>
      {/* Rendering products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 ]">
        {latestProducts.map((item,index) => (
          <ProductCard key={index} id={item._id} image={item.image} name={item.name} price={item.price} brand={item.brand}/>
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;