import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer/Footer";
import Landing from "./pages/Landing/Landing";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import ContactUs from "./pages/contact/ContactUs";
import Login from "./pages/Login";
import Product from "./pages/Product";
import AboutUs from "./pages/AboutUs/AboutUs";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import PlaceOrder from './pages/PlaceOrder';
import Orders from './pages/Order';
import Products from './pages/Products';
import SearchBar from './components/SearchBar';
import OrderSuccess from "./pages/OrderSuccess";
import BrandPage from "./pages/BrandPage";
import SearchResults from "./pages/SearchResults";


const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <ToastContainer />
      <Navbar />
      {/* <SearchBar /> */}

      {/* Main content that fills the available space */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path='/place-order' element={<PlaceOrder />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/brand/:brandName" element={<BrandPage />} />
          <Route path="/search" element={<SearchResults />} />

        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
