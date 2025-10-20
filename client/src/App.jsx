import { Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import Footer from "./components/Footer/Footer";
import Landing from "./pages/Landing/Landing";
// import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import ContactUs from "./pages/contact/ContactUs";
import Login from "./pages/Login";
import Product from "./pages/Product";
import AboutUs from "./pages/AboutUs/AboutUs";import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import PlaceOrder from './pages/PlaceOrder';
import Orders from './pages/Order';
import Products from './pages/Products';
import SearchBar from './components/SearchBar';


const App = () => {
  return (
    <div>
      <ScrollToTop 
                smooth={true}
                style={{ backgroundColor: 'var(--accent)' }} 
            />
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/collection" element={<Products />} /> */}
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        {/* <Route path="/search" element={<SearchPage />} /> */}
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
