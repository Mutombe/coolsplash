import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ShoppingCart, 
  Heart,
  Share2,
  Star,
  Plus,
  Minus
} from 'lucide-react';
import { toast } from 'sonner';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ProductPage = ({ brandData }) => {
  const [selectedFlavor, setSelectedFlavor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  // Example product data structure
  const productData = {
    Sunsplash: {
      name: "Sunsplash",
      tagline: "Bursting with Natural Citrus Flavors",
      description: "Experience the refreshing taste of summer with our signature Sunsplash beverages. Made with real fruit juice and natural ingredients.",
      flavors: [
        {
          name: "Orange Burst",
          color: "bg-orange-500",
          description: "Sweet and tangy orange flavor with a hint of tropical fruits",
          nutrition: {
            calories: 120,
            sugar: "28g",
            servingSize: "250ml"
          },
          sizes: [
            { size: "500ml", price: 2.99 },
            { size: "1L", price: 4.99 },
            { size: "2L", price: 7.99 }
          ]
        },
        {
          name: "Tropical Punch",
          color: "bg-red-500",
          description: "A perfect blend of pineapple, mango, and passion fruit",
          nutrition: {
            calories: 130,
            sugar: "30g",
            servingSize: "250ml"
          },
          sizes: [
            { size: "500ml", price: 2.99 },
            { size: "1L", price: 4.99 },
            { size: "2L", price: 7.99 }
          ]
        }
      ],
      benefits: [
        "Made with real fruit juice",
        "No artificial colors",
        "Natural sweeteners",
        "Rich in Vitamin C"
      ]
    }
  };

  const handleAddToCart = () => {
    if (!selectedFlavor || !selectedSize) {
      toast.error('Please select both flavor and size');
      return;
    }
    toast.success('Added to cart successfully!');
  };

  const handleQuantityChange = (action) => {
    if (action === 'increase') {
      setQuantity(prev => Math.min(prev + 1, 10));
    } else {
      setQuantity(prev => Math.max(prev - 1, 1));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      {/* Product Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{productData.Sunsplash.name}</h1>
          <p className="text-xl">{productData.Sunsplash.tagline}</p>
        </div>
      </div>

      {/* Product Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image Gallery */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="aspect-square relative">
              <img
                src="/smoothie.png"
                alt="Product"
                className="rounded-lg object-cover w-full h-full"
              />
              <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
            <div className="flex gap-4 mt-4">
              {[1, 2, 3, 4].map((img) => (
                <div key={img} className="w-24 h-24 rounded-lg overflow-hidden">
                  <img
                    src="/smoothie2.png"
                    alt={`Product view ${img}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Flavor Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Select Flavor</CardTitle>
                <CardDescription>Choose from our refreshing varieties</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {productData.Sunsplash.flavors.map((flavor) => (
                    <button
                      key={flavor.name}
                      onClick={() => setSelectedFlavor(flavor)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        selectedFlavor?.name === flavor.name
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-200'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full ${flavor.color} mb-2`} />
                      <h3 className="font-medium">{flavor.name}</h3>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Size Selection */}
            {selectedFlavor && (
              <Card>
                <CardHeader>
                  <CardTitle>Select Size</CardTitle>
                  <CardDescription>Choose your preferred quantity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    {selectedFlavor.sizes.map((sizeOption) => (
                      <button
                        key={sizeOption.size}
                        onClick={() => setSelectedSize(sizeOption)}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          selectedSize?.size === sizeOption.size
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-200'
                        }`}
                      >
                        <p className="font-medium">{sizeOption.size}</p>
                        <p className="text-sm text-gray-600">${sizeOption.price}</p>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Quantity and Add to Cart */}
            {selectedSize && (
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => handleQuantityChange('decrease')}
                        className="p-2 rounded-full hover:bg-gray-100"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="font-medium">{quantity}</span>
                      <button
                        onClick={() => handleQuantityChange('increase')}
                        className="p-2 rounded-full hover:bg-gray-100"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-xl font-bold">
                      ${(selectedSize.price * quantity).toFixed(2)}
                    </p>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <button
                      onClick={handleAddToCart}
                      className="flex-1 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                    >
                      <ShoppingCart className="h-5 w-5" />
                      Add to Cart
                    </button>
                    <button className="p-3 border rounded-lg hover:bg-gray-50">
                      <Heart className="h-5 w-5" />
                    </button>
                    <button className="p-3 border rounded-lg hover:bg-gray-50">
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Product Information Tabs */}
        <div className="mt-12">
          <div className="border-b">
            <div className="flex space-x-8">
              {['description', 'nutrition', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-2 border-b-2 transition-colors ${
                    activeTab === tab
                      ? 'border-blue-500 text-blue-500'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700">{productData.Sunsplash.description}</p>
                <h3 className="text-xl font-bold mt-6 mb-4">Benefits</h3>
                <ul className="space-y-2">
                  {productData.Sunsplash.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-yellow-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'nutrition' && selectedFlavor && (
              <div className="max-w-md">
                <h3 className="text-xl font-bold mb-4">Nutrition Information</h3>
                <div className="space-y-4">
                  <div className="flex justify-between py-2 border-b">
                    <span>Serving Size</span>
                    <span>{selectedFlavor.nutrition.servingSize}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span>Calories</span>
                    <span>{selectedFlavor.nutrition.calories}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span>Sugar</span>
                    <span>{selectedFlavor.nutrition.sugar}</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-5 w-5 text-yellow-500 fill-current"
                      />
                    ))}
                  </div>
                  <span className="text-lg font-medium">4.8 out of 5</span>
                </div>
                <p className="text-gray-600">Reviews coming soon...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;