import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const leftLinks = [
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  const rightLinks = [
    { name: 'Search', path: '#', icon: Search },
    { name: 'Cart', path: '/cart', icon: ShoppingCart },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-between items-center h-16">
          {/* Left Menu */}
          <div className="flex items-center space-x-8">
            {leftLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-base font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-blue-600 border-2 px-2 py-1 rounded-sm border-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Centered Logo */}
          <div className="flex-shrink-0 absolute left-1/2 transform -translate-x-1/2">
            
            <Link to="/" className="text-2xl font-bold text-blue-600">
              <img src="/montero.png" alt="Logo" className="h-12 w-45 " />
            </Link>
          </div>

          {/* Right Menu */}
          <div className="flex items-center space-x-8">
            {rightLinks.map((link) => (
              <React.Fragment key={link.name}>
                {link.name === 'Search' ? (
                  <button
                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <link.icon className="h-5 w-5" />
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <link.icon className="h-5 w-5" />
                  </Link>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden justify-between items-center h-16">
          {/* Left - Products Link */}
          <Link
            to="/products"
            className="text-base font-medium text-gray-600 hover:text-blue-600 "
          >
            Products
          </Link>

          {/* Center - Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" className="text-xl font-bold text-blue-600">
            <img src="/montero.png" alt="Logo" className="h-12 w-45 " />
            </Link>
          </div>

          {/* Right - Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg p-4">
          <div className="max-w-3xl mx-auto">
            <input
              type="text"
              placeholder="Search products, articles, and more..."
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {leftLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:tex-blue-600 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 px-3 py-2">
              {rightLinks.map((link) => (
                <React.Fragment key={link.name}>
                  {link.name === 'Search' ? (
                    <button
                      onClick={() => setIsSearchOpen(!isSearchOpen)}
                      className="text-gray-600 hover:text-blue-600"
                    >
                      <link.icon className="h-5 w-5" />
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-blue-600"
                    >
                      <link.icon className="h-5 w-5" />
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;