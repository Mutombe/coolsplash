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

export const ContactUs = () => {
  const [map, setMap] = useState(null);

  React.useEffect(() => {
    // Only import and initialize if we're in a browser environment
    if (typeof window !== "undefined") {
      import("leaflet").then((L) => {
        // Initialize map
        const mapInstance = L.map("contact-map").setView(
          [40.7128, -74.006],
          13
        );

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "© OpenStreetMap contributors",
        }).addTo(mapInstance);

        // Add marker for company location
        L.marker([40.7128, -74.006])
          .addTo(mapInstance)
          .bindPopup("Montero Beverages HQ");

        setMap(mapInstance);
      });
    }

    // Cleanup
    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Let's Connect</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <Card className="border-none shadow-lg">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <MapPin className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">
                          Visit Our Office
                        </h3>
                        <p className="text-gray-600">
                          123 Beverage Lane
                          <br />
                          Refreshment City, RC 12345
                          <br />
                          United States
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <Phone className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Call Us</h3>
                        <p className="text-gray-600">
                          Toll-free: +1 (855) 123-4567
                          <br />
                          Direct: +1 (555) 123-4567
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <Mail className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Email Us</h3>
                        <p className="text-gray-600">
                          General Inquiries: info@monterobeverages.com
                          <br />
                          Support: support@monterobeverages.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Map */}
            <div>
              <h3 className="text-xl font-bold mb-4">Find Us</h3>
              <Card className="overflow-hidden">
                <div id="contact-map" className="h-[300px]"></div>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>
                We'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      require
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Department
                  </label>
                  <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
                    <option value="">Select a department</option>
                    <option value="customer-service">Customer Service</option>
                    <option value="sales">Sales</option>
                    <option value="marketing">Marketing</option>
                    <option value="press">Press & Media</option>
                    <option value="careers">Careers</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    className="w-full p-3 border rounded-lg h-32 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    required
                    placeholder="How can we help you today?"
                  ></textarea>
                </div>
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="privacy-policy"
                    className="mt-1"
                    required
                  />
                  <label
                    htmlFor="privacy-policy"
                    className="text-sm text-gray-600"
                  >
                    I agree to the processing of my personal data according to
                    the privacy policy
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "What are your business hours?",
                answer:
                  "Our office is open Monday through Friday from 9:00 AM to 6:00 PM, and Saturday from 10:00 AM to 4:00 PM (EST). We're closed on Sundays and major holidays.",
              },
              {
                question: "How quickly can I expect a response?",
                answer:
                  "We strive to respond to all inquiries within 24 business hours. For urgent matters, please call our direct line.",
              },
              {
                question: "Do you offer product samples?",
                answer:
                  "Yes, we offer product samples to qualified businesses. Please contact our sales department for more information.",
              },
              {
                question: "Where can I find nutritional information?",
                answer:
                  "Detailed nutritional information for all our products can be found on their respective product pages on our website.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Hours & Support Section */}
        <div className="mt-24">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">24/7 Support</h3>
                <p className="text-gray-600 mb-4">
                  Need urgent assistance? Our support team is available 24/7
                  through our emergency hotline.
                </p>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-blue-500" />
                  <span className="font-medium">1-800-MONTERO</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default {
  ContactUs,
};
