import React, { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const { getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setShowSearchBar(false);
      setSearchTerm('');
    }
  };

  return (
    <div className='flex flex-col bg-black text-white'>
      {/* Top Navbar */}
      <div className='flex items-center justify-between py-5 font-medium px-6 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <Link to="/">
          <img src="/logo.svg" className='w-36' alt="Logo" />
        </Link>

        <ul className='hidden sm:flex gap-5 text-sm'>
          <NavLink to='/' className='flex flex-col items-center gap-1'>
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-white hidden' />
          </NavLink>
          <NavLink to='/products' className='flex flex-col items-center gap-1'>
            <p>PRODUCTS</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-white hidden' />
          </NavLink>
          <NavLink to='/about-us' className='flex flex-col items-center gap-1'>
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-white hidden' />
          </NavLink>
          <NavLink to='/contact-us' className='flex flex-col items-center gap-1'>
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-white hidden' />
          </NavLink>
        </ul>

        <div className='flex items-center gap-6'>
          {/* Search Icon */}
          <img
            onClick={() => setShowSearchBar(!showSearchBar)}
            src={assets.search_icon}
            className='w-5 cursor-pointer'
            alt="Search"
          />

          {/* Profile */}
          <div className='group relative'>
            <img
              onClick={() => token ? null : navigate('/login')}
              src={assets.profile_icon}
              className='w-5 cursor-pointer'
              alt="Profile"
            />
            {token && (
              <div className='group-hover:block hidden absolute dropdown-menu right-0 py-0 px-0'>
                <div className='flex flex-col gap-2 w-36 py-3 px-0 bg-slate-100 text-gray-700 rounded'>
                  <p className='cursor-pointer hover:text-black px-4'>My Profile</p>
                  <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black px-4'>Orders</p>
                  <p onClick={logout} className='cursor-pointer hover:text-black px-4'>Logout</p>
                </div>
              </div>
            )}
          </div>

          {/* Cart */}
          <Link to='/cart' className='relative'>
            <img src={assets.cart_icon} className='w-5 cursor-pointer' alt="Cart" />
            <p className='absolute right-[-5px] bottom[-5px] w-4 text-center leading-4 bg-white text-black aspect-square rounded-full text-[6px]'>
              {getCartCount()}
            </p>
          </Link>

          {/* Mobile menu icon */}
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            className='w-5 cursor-pointer sm:hidden'
            alt="Menu"
          />
        </div>
      </div>

      {/* Inline Search Bar */}
      {showSearchBar && (
        <form
          onSubmit={handleSearch}
          className='flex items-center justify-center bg-black py-3 px-6 transition-all duration-300'
        >
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for products..."
            className='w-full max-w-xl px-4 py-2 rounded-l-md outline-none text-black'
          />
          <button
            type="submit"
            className='bg-gray-300 hover:bg-gray-500 px-4 py-2 rounded-r-md text-black font-medium'
          >
            Search
          </button>
        </form>
      )}

      {/* Sidebar menu for mobile */}
      <div
        className={`z-50 absolute top-0 right-0 bottom-0 overflow-hidden bg-black transition-all ${
          visible ? 'w-full' : 'w-0'
        }`}
      >
        <div className='flex flex-col text-white'>
          <div onClick={() => setVisible(false)} className='flex items gap-4 p-3'>
            <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="Back" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6' to='/'>HOME</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6' to='/products'>PRODUCTS</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6' to='/contact-us'>CONTACT</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
