import React, { useState } from 'react';
import { 
  Filter,
  Search,
  ChevronDown,
  Grid,
  List,
  X,
  SlidersHorizontal
} from 'lucide-react';
import {
  Slider,
} from '@/components/ui/slider';

const ProductsPage = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedSize, setSelectedSize] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 10]);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('newest');

  const products = [
    {
      id: 1,
      name: "Orange Burst",
      brand: "Sunsplash",
      price: 2.99,
      size: "500ml",
      rating: 4.5,
      reviews: 128,
      description: "Refreshing orange flavor with natural citrus extracts",
      tags: ["citrus", "refreshing", "natural"],
      color: "bg-orange-500"
    },
    {
      id: 2,
      name: "Berry Blast",
      brand: "Coolup",
      price: 3.49,
      size: "500ml",
      rating: 4.8,
      reviews: 96,
      description: "Energy-boosting berry mix with natural caffeine",
      tags: ["energy", "berries", "caffeine"],
      color: "bg-purple-500"
    },
    // Add more products as needed
  ];

  const filters = {
    brands: ["Sunsplash", "Coolup", "Smoothies", "Coolsplash"],
    sizes: ["500ml", "1L", "2L"],
    types: ["Energy", "Refreshing", "Smoothie", "Classic"],
    ingredients: ["Natural", "Sugar-free", "Vitamin-enriched", "Caffeinated"]
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex-1 max-w-xl relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 rounded-full text-gray-800 focus:outline-none"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden bg-white/20 px-4 py-2 rounded-full flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              Filters
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24 space-y-6">
              <div className="flex justify-between items-center lg:hidden">
                <h3 className="font-bold">Filters</h3>
                <button onClick={() => setShowFilters(false)}>
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-bold mb-4">Price Range</h3>
                <div className="px-2">
                  <Slider
                    defaultValue={[0, 10]}
                    max={10}
                    step={0.5}
                    onValueChange={setPriceRange}
                  />
                  <div className="flex justify-between mt-2 text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Brand Filter */}
              <div>
                <h3 className="font-bold mb-4">Brands</h3>
                <div className="space-y-2">
                  {filters.brands.map(brand => (
                    <label key={brand} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                      />
                      {brand}
                    </label>
                  ))}
                </div>
              </div>

              {/* Size Filter */}
              <div>
                <h3 className="font-bold mb-4">Size</h3>
                <div className="space-y-2">
                  {filters.sizes.map(size => (
                    <label key={size} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                      />
                      {size}
                    </label>
                  ))}
                </div>
              </div>

              {/* Type Filter */}
              <div>
                <h3 className="font-bold mb-4">Type</h3>
                <div className="space-y-2">
                  {filters.types.map(type => (
                    <label key={type} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                      />
                      {type}
                    </label>
                  ))}
                </div>
              </div>

              {/* Ingredients Filter */}
              <div>
                <h3 className="font-bold mb-4">Ingredients</h3>
                <div className="space-y-2">
                  {filters.ingredients.map(ingredient => (
                    <label key={ingredient} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                      />
                      {ingredient}
                    </label>
                  ))}
                </div>
              </div>

              <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Apply Filters
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort and View Options */}
            <div className="bg-white rounded-lg shadow-lg p-4 mb-6 flex flex-wrap gap-4 items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-gray-600">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border rounded-lg px-3 py-1.5"
                >
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="popular">Most Popular</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-50 text-blue-500' : 'text-gray-400'}`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-50 text-blue-500' : 'text-gray-400'}`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Products Display */}
            <div className={viewMode === 'grid' ? 
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : 
              "space-y-6"
            }>
              {products.map((product) => (
                <div
                  key={product.id}
                  className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  <div className={`${viewMode === 'list' ? 'w-48' : 'w-full'}`}>
                    <div className={`aspect-square relative ${product.color}`}>
                      <img
                        src="/smoothie2.png"
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="p-6 flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm text-blue-500 font-medium">{product.brand}</p>
                        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                      </div>
                      <p className="text-xl font-bold">${product.price}</p>
                    </div>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`text-${i < Math.floor(product.rating) ? 'yellow' : 'gray'}-400`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">({product.reviews})</span>
                      </div>
                      <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;