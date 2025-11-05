import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import ProductCard from "../components/ProductCard";

const BrandPage = () => {
  const { brandName } = useParams(); // e.g. /brand/sony
  const { products } = useContext(ShopContext);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [sortType, setSortType] = useState("relevance");

  const selectedBrand = brandName.charAt(0).toUpperCase() + brandName.slice(1);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let copy = products.filter(
      (item) => item.brand.toLowerCase() === brandName.toLowerCase()
    );

    if (category.length > 0) {
      copy = copy.filter((item) => category.includes(item.category));
    }

    setFilteredProducts(copy);
  };

  const sortProducts = () => {
    let sorted = [...filteredProducts];
    switch (sortType) {
      case "low-high":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        sorted.sort((a, b) => b.price - a.price);
        break;
      default:
        applyFilter();
        return;
    }
    setFilteredProducts(sorted);
  };

  useEffect(() => {
    applyFilter();
  }, [brandName, products, category]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  return (
    <div className="pt-10 border-t px-15 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      {/* Brand header */}
        <div className="text-center mb-10 border-b pb-6">

        <h1 className="text-3xl font-semibold tracking-wide">
          {selectedBrand} Products
        </h1>
        <p className="text-gray-500 mt-2">
          Explore the latest collection from {selectedBrand}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10">
        {/* Filters */}
        <div className="min-w-60">
          <p className="my-2 text-xl">FILTERS</p>

          <div className="border border-gray-300 pl-5 py-3 mt-6">
            <p className="mb-3 text-sm font-medium">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value={"Camera"}
                  onChange={toggleCategory}
                />{" "}
                Camera
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value={"Drone"}
                  onChange={toggleCategory}
                />{" "}
                Drone
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value={"Action Camera"}
                  onChange={toggleCategory}
                />{" "}
                Action Camera
              </p>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between text-base sm:text-2xl ml-4 mb-3">
            <Title text1={selectedBrand.toUpperCase()} text2={"PRODUCTS"} />

            <select
              onChange={(e) => setSortType(e.target.value)}
              className="border-2 border-gray-300 text-sm px-2"
            >
              <option value="relevant">Sort by: Relevance</option>
              <option value="low-high">Sort by: Price Low to High</option>
              <option value="high-low">Sort by: Price High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-2 ml-3 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item, index) => (
                <ProductCard
                  key={index}
                  name={item.name}
                  id={item._id}
                  price={item.price}
                  image={item.image}
                />
              ))
            ) : (
              <p className="text-gray-600 ml-3">
                No products found for {selectedBrand}.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandPage;
