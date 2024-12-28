import React, { useState, useEffect } from 'react';
import { 
  Droplet, 
  Menu, 
  X, 
  ArrowRight, 
  ShoppingCart,
  Search,
  ChevronDown,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';
import { toast } from 'sonner';
import ProductPage from '../product/product';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "Refresh Your World",
      subtitle: "Discover our range of natural beverages",
      image: "/water.png",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "New Tropical Flavors",
      subtitle: "Experience summer in every sip",
      image: "/water.png",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Healthy Smoothies",
      subtitle: "Made with real fruit and natural ingredients",
      image: "/water.png",
      color: "from-orange-500 to-orange-600"
    }
    ];
    
    const navProducts = {
        Sunsplash: {
          flavors: ['Orange Burst', 'Tropical Punch', 'Citrus Blast'],
          description: 'Refreshing citrus beverages bursting with natural flavors'
        },
        Coolup: {
          flavors: ['Berry Blast', 'Grape Rush', 'Apple Fizz'],
          description: 'Energy-boosting drinks for active lifestyles'
        },
        Smoothies: {
          flavors: ['Strawberry Banana', 'Mango Paradise', 'Green Energy'],
          description: 'Real fruit smoothies packed with nutrients'
        },
        Coolsplash: {
          flavors: ['Classic Lemon', 'Mixed Fruit', 'Blue Raspberry'],
          description: 'Our signature refreshment line'
        }
      };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-screen">

      {/* Hero Slider */}
      <div className="relative h-screen">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              activeSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-80`} />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/10 sm:mx-8 mx-2  rounded-lg text-center text-gray-100 p-4 w-full" style={{backgroundImage: ``} }>
                <h1 className="text-5xl md:text-7xl font-bold mb-6">{slide.title}</h1>
                <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
                <button className={`bg-white/60 text-blue-500 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors`} onClick={() => navigate(`/products`)}>
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Products */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(navProducts).map(([brand, details]) => (
              <div key={brand} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/smoothie2.png"
                  alt={brand}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{brand}</h3>
                  <p className="text-gray-600 mb-4">{details.description}</p>
                  <button className="flex items-center text-blue-600 hover:text-blue-600" onClick={() => navigate(`/products`)}>
                    View Products <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProductPage brandData={navProducts}/>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Coolsplash?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Natural Ingredients",
                description: "We use only the finest natural ingredients in our beverages"
              },
              {
                title: "Sustainable Packaging",
                description: "Committed to reducing our environmental impact"
              },
              {
                title: "Quality Assured",
                description: "Rigorous quality control for the best taste"
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <Droplet className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Follow Us</h2>
          <div className="flex justify-center space-x-8">
            {[Instagram, Facebook, Twitter].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
              >
                <Icon className="h-6 w-6 text-blue-500" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-blue-500 text-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="mb-8">Subscribe to our newsletter for new product announcements and exclusive offers</p>
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              toast.success('Thanks for subscribing!');
            }}
            className="max-w-md mx-auto flex gap-4"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-full text-gray-800 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-gray-100 text-blue-500 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;