import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/ui/section-title';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gray-50 py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <SectionTitle
              title="Contact Us"
              subtitle="Get in touch with our team for any inquiries or support"
              center
            />
          </div>
        </div>

        {/* Contact Information and Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-center">Get in Touch</h2>
                <p className="text-gray-700 mb-8 text-center">
                  We're here to help you with any questions or support you may need.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-chess-primary/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-chess-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Phone</h3>
                      <p className="text-gray-700">+91 87625 62549</p>
                      <p className="text-sm text-gray-500 mt-1">Available 24/7</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-chess-primary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-chess-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-gray-700">contact.gochess@gmail.com</p>
                      <p className="text-sm text-gray-500 mt-1">We'll respond as quickly as possible</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-chess-primary/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-chess-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Location</h3>
                      <p className="text-gray-700">Bengaluru, India</p>
                      <p className="text-sm text-gray-500 mt-1">For institutional inquiries, we can arrange in-person meetings</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="font-semibold text-lg mb-4">Find Us</h3>
                  <div className="bg-gray-200 rounded-lg h-[250px] flex items-center justify-center text-gray-500">
                    {/* This is a placeholder for Google Maps */}
                    <p>Google Maps Embed Would Go Here</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h2>
                  <form className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium mb-1">First Name</label>
                        <Input id="firstName" placeholder="Enter your first name" />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium mb-1">Last Name</label>
                        <Input id="lastName" placeholder="Enter your last name" />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                      <Input id="phone" placeholder="Enter your phone number" />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                      <Input id="subject" placeholder="What is this regarding?" />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">Your Message</label>
                      <Textarea 
                        id="message" 
                        placeholder="Please provide details about your inquiry" 
                        rows={6}
                      />
                    </div>
                    
                    <Button className="w-full bg-chess-primary hover:bg-chess-secondary">Send Message</Button>
                  </form>
                </div>
                
                <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">How quickly will I receive a response?</h4>
                      <p className="text-gray-600 text-sm mt-1">We typically respond to all inquiries within 6-12 hours.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Can I schedule a call to discuss programs?</h4>
                      <p className="text-gray-600 text-sm mt-1">Yes, you can request a call in your message and we'll arrange a suitable time.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Do you offer trial classes?</h4>
                      <p className="text-gray-600 text-sm mt-1">Yes, we offer a free 30-minute trial class for new students to experience our teaching approach.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
