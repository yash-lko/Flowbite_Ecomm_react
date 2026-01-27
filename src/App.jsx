import { Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Products from "./components/pages/Products";
import Cart from "./components/common/Cart";
import ProductDetails from "./components/pages/ProductDetails";
import Tostify from "./components/pages/tostify";

export default function App() {
  return (
    <>
    <Tostify/>
      <Navbar />
      <Routes>


        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/view-carts" element={<Cart />} />
        <Route  path="productdetails/:product_slug" element={<ProductDetails />} />


      </Routes>
      <Footer />
    </>
  );
}
