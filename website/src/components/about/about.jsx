import React, { useState } from 'react';
import { MapPin, Phone, Mail, Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import {
  Card,
  CardContent,
} from "@/components/ui/card";

// About Us Page Component
export const AboutUs = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(0);

  const milestones = [
    {
      year: "1995",
      title: "Our Beginnings",
      description: "Founded in a small local facility with a vision to create natural beverages that would revolutionize the industry.",
      image: "/smoothie.png"
    },
    {
      year: "2005",
      title: "National Expansion",
      description: "Expanded operations nationwide and introduced our signature Sunsplash line of beverages.",
      image: "/smoothie2.png"
    },
    {
      year: "2015",
      title: "Sustainability Initiative",
      description: "Launched our comprehensive sustainability program, transitioning to 100% recyclable packaging.",
      image: "/smoothie.png"
    },
    {
      year: "2024",
      title: "Innovation Today",
      description: "Leading the industry in natural beverage innovations with state-of-the-art production facilities.",
      image: "/smoothie2.png"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-500 to-blue-600 text-white py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Refreshing the World Naturally</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">Creating premium beverages that inspire healthier lifestyles since 1995</p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-600">At Montero Beverages, we're more than just a beverage company. We're pioneers in crafting drinks that combine exceptional taste with nutritional value, setting new standards for quality and innovation in the industry.</p>
              <p className="text-lg text-gray-600">Our commitment extends beyond our products to encompass environmental stewardship and community engagement. We believe in creating beverages that not only refresh but also contribute to a healthier planet.</p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <h3 className="text-3xl font-bold text-blue-600 mb-2">100+</h3>
                  <p className="text-sm text-gray-600">Natural Ingredients</p>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <h3 className="text-3xl font-bold text-blue-600 mb-2">50M+</h3>
                  <p className="text-sm text-gray-600">Happy Customers</p>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <h3 className="text-3xl font-bold text-blue-600 mb-2">25+</h3>
                  <p className="text-sm text-gray-600">Countries Served</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-500/10 rounded-lg transform rotate-3"></div>
            <img src="/smoothie2.png" alt="Our Mission" className="relative rounded-lg shadow-xl" />
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Uncompromising Quality",
                description: "From ingredient selection to production processes, we maintain the highest standards of quality in every step.",
                icon: "🌟"
              },
              {
                title: "Environmental Stewardship",
                description: "Leading the industry in sustainable practices, from sourcing to packaging, with a commitment to reducing our environmental footprint.",
                icon: "🌍"
              },
              {
                title: "Continuous Innovation",
                description: "Investing in research and development to create healthier, more sustainable beverage options for our customers.",
                icon: "💡"
              }
            ].map((value, index) => (
              <Card key={index} className="transform hover:-translate-y-2 transition-transform duration-300">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Journey</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer p-6 rounded-lg transition-colors ${
                      selectedMilestone === index ? 'bg-blue-50' : 'hover:bg-gray-50'
                    }`}
                    onClick={() => setSelectedMilestone(index)}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-bold text-blue-600">{milestone.year}</span>
                      <h3 className="text-xl font-bold">{milestone.title}</h3>
                    </div>
                    <p className="mt-2 text-gray-600">{milestone.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/10 rounded-lg transform -rotate-3"></div>
              <img
                src={milestones[selectedMilestone].image}
                alt={milestones[selectedMilestone].title}
                className="relative rounded-lg shadow-xl transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: "Sarah Johnson",
                role: "Chief Executive Officer",
                bio: "20+ years of experience in the beverage industry, leading innovation and sustainable practices.",
                image: "/api/placeholder/200/200"
              },
              {
                name: "Michael Chen",
                role: "Head of Product Innovation",
                bio: "Former food scientist with a passion for creating healthy, delicious beverages.",
                image: "/api/placeholder/200/200"
              },
              {
                name: "Emma Rodriguez",
                role: "Sustainability Director",
                bio: "Environmental specialist leading our initiatives for a greener future.",
                image: "/api/placeholder/200/200"
              }
            ].map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative">
                  <img src={member.image} alt={member.name} className="w-full aspect-square object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-white/80">{member.role}</p>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};