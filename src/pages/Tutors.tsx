
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/ui/section-title';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Check, Upload } from 'lucide-react';

const Tutors = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gray-50 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Join Our Team of Chess Tutors"
              subtitle="Share your expertise and passion for chess while building a flexible career"
              center
            />
          </div>
        </div>

        {/* Two-column layout */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Benefits Section */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Why Teach with GoChess?</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-chess-primary rounded-full p-1">
                      <Check size={16} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Flexible Schedule</h3>
                      <p className="text-gray-600">Set your own hours and work as much or as little as you want. Perfect for part-time or full-time coaching.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-chess-primary rounded-full p-1">
                      <Check size={16} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Competitive Compensation</h3>
                      <p className="text-gray-600">Earn competitive rates based on your experience, qualifications, and student ratings.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-chess-primary rounded-full p-1">
                      <Check size={16} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Teaching Resources</h3>
                      <p className="text-gray-600">Access our library of teaching materials, exercises, and curriculum guidelines to enhance your coaching.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-chess-primary rounded-full p-1">
                      <Check size={16} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Professional Growth</h3>
                      <p className="text-gray-600">Join a community of chess educators, participate in training sessions, and develop your teaching skills.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-chess-primary rounded-full p-1">
                      <Check size={16} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Institutional Placements</h3>
                      <p className="text-gray-600">Opportunities to be placed in schools and academies for regular teaching assignments.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg mt-8">
                  <h3 className="font-semibold text-lg mb-2">Our Requirements</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Demonstrable chess knowledge and playing experience</li>
                    <li>Clear communication skills in English and/or local languages</li>
                    <li>Patience and ability to work with students of different ages</li>
                    <li>Reliable internet connection for online coaching</li>
                    <li>Professional attitude and commitment to scheduled sessions</li>
                  </ul>
                </div>
              </div>

              {/* Application Form */}
              <div>
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Apply to Become a Tutor</h2>
                  <CardContent className="p-0">
                    <form className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
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
                        <label htmlFor="chessRating" className="block text-sm font-medium mb-1">Chess Rating (if any)</label>
                        <Input id="chessRating" placeholder="FIDE/National Rating" />
                      </div>
                      
                      <div>
                        <label htmlFor="experience" className="block text-sm font-medium mb-1">Years of Experience</label>
                        <Input id="experience" type="number" placeholder="Years of playing/teaching" />
                      </div>
                      
                      <div>
                        <label htmlFor="aboutYou" className="block text-sm font-medium mb-1">Tell Us About Yourself</label>
                        <Textarea 
                          id="aboutYou" 
                          placeholder="Share your chess journey, teaching experience, and why you want to join GoChess" 
                          rows={4}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Upload Resume/Certificate</label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                          <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                          <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
                          <p className="text-xs text-gray-400 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                        </div>
                      </div>
                      
                      <Button className="w-full bg-chess-primary hover:bg-chess-secondary">Submit Application</Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="What Our Tutors Say" 
              subtitle="Hear from chess coaches who have joined the GoChess family"
              center
            />
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="p-6">
                <div className="space-y-4">
                  <p className="italic text-gray-600">
                    "Joining GoChess has transformed my teaching career. The flexible schedule allows me to balance coaching with my tournament play, and the platform makes it easy to connect with motivated students."
                  </p>
                  <div>
                    <p className="font-semibold">Anand K.</p>
                    <p className="text-sm text-gray-500">FIDE Master, Teaching for 3 years</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="space-y-4">
                  <p className="italic text-gray-600">
                    "As someone passionate about chess education, GoChess has been the perfect platform. The teaching resources are excellent, and the staff is always supportive of our needs."
                  </p>
                  <div>
                    <p className="font-semibold">Priya M.</p>
                    <p className="text-sm text-gray-500">National Instructor, Teaching for 5 years</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="space-y-4">
                  <p className="italic text-gray-600">
                    "The institutional placements through GoChess have provided me with stable teaching opportunities at schools. It's rewarding to introduce chess to young minds and watch them grow."
                  </p>
                  <div>
                    <p className="font-semibold">Rajiv S.</p>
                    <p className="text-sm text-gray-500">Chess Coach, Teaching for 7 years</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Tutors;
