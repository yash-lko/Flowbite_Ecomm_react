import { Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Products from "./components/pages/Products";
import Cart from "./components/common/Cart";
import ProductDetails from "./components/pages/ProductDetails";
import Tostify from "./components/pages/tostify";
import Contact from "./components/pages/Contact";
import Auth from "./components/pages/Auth";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Tostify />
      <Navbar />
      <main className="mx-auto w-full max-w-[1400px] px-4 py-6 md:px-6 md:py-8">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/view-carts" element={<Cart />} />
          <Route path="productdetails/:product_slug" element={<ProductDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
