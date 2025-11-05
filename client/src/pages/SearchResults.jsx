import React, { useState, useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import ProductCard from '../components/ProductCard';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const { products: allProducts } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [sortType, setSortType] = useState("relevance");

  // Fetch search results from backend
  useEffect(() => {
    if (query) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/product/search?q=${query}`)
        .then((res) => {
          if (res.data.success) setFilterProducts(res.data.products);
        })
        .catch((err) => console.log(err));
    }
  }, [query]);

  // Category toggle
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  // Brand toggle
  const toggleBrand = (e) => {
    if (brand.includes(e.target.value)) {
      setBrand((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setBrand((prev) => [...prev, e.target.value]);
    }
  };

  // Apply filters
  const applyFilter = () => {
    let productsCopy = allProducts.slice();

    if (query) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (brand.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        brand.includes(item.brand)
      );
    }

    setFilterProducts(productsCopy);
  };

  // Sort
  const sortProduct = () => {
    let fpCopy = filterProducts.slice();
    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [allProducts, category, brand, query]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t px-15 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      {/* Filters */}
      <div className='min-w-60'>
        <p
          onClick={() => setShowFilter(!showFilter)}
          className='my-2 text-xl flex items-center cursor-pointer gap-2'
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>

        {/* Categories */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? '' : 'hidden'
          } sm:block`}
        >
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            {['Camera', 'Drone', 'Action Camera'].map((cat) => (
              <p className='flex gap-2' key={cat}>
                <input className='w-3' type='checkbox' value={cat} onChange={toggleCategory} /> {cat}
              </p>
            ))}
          </div>
        </div>

        {/* Brands */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? '' : 'hidden'
          } sm:block`}
        >
          <p className='mb-3 text-sm font-medium'>BRAND</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            {['Canon', 'Dji', 'Fujifilm', 'GoPro', 'Leica', 'Nikon', 'Olympus', 'Panasonic', 'Sony', 'Other'].map(
              (b) => (
                <p className='flex gap-2' key={b}>
                  <input className='w-3' type='checkbox' value={b} onChange={toggleBrand} /> {b}
                </p>
              )
            )}
          </div>
        </div>
      </div>

      {/* Search Results */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl ml-4 mb-3'>
          <Title text1="Results for" text2={`"${query}"`} />
          <select
            onChange={(e) => setSortType(e.target.value)}
            className='border-2 border-gray-300 text-sm px-2'
          >
            <option value="relevant">Sort by: Relevance</option>
            <option value="low-high">Sort by: Price Low to High</option>
            <option value="high-low">Sort by: Price High to Low</option>
          </select>
        </div>

        {/* Products grid */}
        {filterProducts.length === 0 ? (
          <p className='text-gray-500 ml-4 mt-4'>
            No products found for "<span className='font-medium'>{query}</span>".
          </p>
        ) : (
          <div className='grid grid-cols-2 ml-3 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {filterProducts.map((item, index) => (
              <ProductCard
                key={index}
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
