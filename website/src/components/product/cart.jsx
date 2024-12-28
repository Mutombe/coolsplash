import React, { useState } from 'react';
import { MapPin, Phone, Mail, Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Cart = () => {
    const [cartItems, setCartItems] = useState([
      {
        id: 1,
        name: "Orange Burst",
        size: "500ml",
        price: 2.99,
        quantity: 2,
        image: "/smoothie.png"
      },
      {
        id: 2,
        name: "Tropical Punch",
        size: "1L",
        price: 4.99,
        quantity: 1,
        image: "/smoothie2.png"
      }
    ]);
  
    const updateQuantity = (id, action) => {
      setCartItems(items =>
        items.map(item => {
          if (item.id === id) {
            const newQuantity = action === 'increase' 
              ? Math.min(item.quantity + 1, 10)
              : Math.max(item.quantity - 1, 1);
            return { ...item, quantity: newQuantity };
          }
          return item;
        })
      );
    };
  
    const removeItem = (id) => {
      setCartItems(items => items.filter(item => item.id !== id));
      toast.success('Item removed from cart');
    };
  
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 5.99;
    const total = subtotal + shipping;
  
    return (
      <div className="min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="divide-y">
                  {cartItems.map((item) => (
                    <div key={item.id} className="py-6 first:pt-0 last:pb-0">
                      <div className="flex gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="font-medium">{item.name}</h3>
                              <p className="text-sm text-gray-600">{item.size}</p>
                            </div>
                            <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center space-x-4">
                              <button
                                onClick={() => updateQuantity(item.id, 'decrease')}
                                className="p-1 rounded-full hover:bg-gray-100"
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <span>{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, 'increase')}
                                className="p-1 rounded-full hover:bg-gray-100"
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-red-500 hover:text-red-600"
                            >
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
  
            {/* Order Summary */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="pt-4 border-t flex justify-between font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <button 
                    className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 mt-6"
                    onClick={() => toast.success('Proceeding to checkout...')}
                  >
                    Proceed to Checkout
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default {
    Cart
  };