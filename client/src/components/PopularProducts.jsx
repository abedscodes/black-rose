import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductCard from "./ProductCard";

const PopularItems = () => {
  const { products } = useContext(ShopContext);
  const [popularItems, setPopularItems] = useState([]);

  useEffect(() => {
    const popularProduct = products.filter((item) => item.popularItem);
    console.log(popularProduct);
    
    setPopularItems(popularProduct.slice(0, 6));
  }, [products]);

  return (
    <div className="my-10 px-15 sm:px-[5vw] md:px-[7vw] lg:px-[9vw">
      <div className="text-center text-3xl py-8">
      <h2 className="section-title">POPULAR PRODUCTS</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {popularItems.map((item,index) => (
            <ProductCard key={index} id={item._id} image={item.image} name={item.name} price={item.price} brand={item.brand}/>
            ))}
      </div>
    </div>
  );
};

export default PopularItems;