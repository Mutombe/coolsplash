import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navigation from './components/nav/nav';
import HomePage from './components/home/home';
import { Toaster, toast } from 'sonner';
import { useLocation } from 'react-router-dom';
import ProductsPage from './components/product/productPage';
import { useEffect } from 'react';
import { ContactUs } from './components/contact/contact';
import { AboutUs } from './components/about/about';
import { Cart } from './components/product/cart';


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Toaster position="top-right" />
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;