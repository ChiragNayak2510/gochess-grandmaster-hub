
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative chess-pattern">
      <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Your Ultimate Hub for <span className="text-chess-primary">Chess Mastery!</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Elevate your chess game with professional coaching from verified experts. 
            Whether you're a beginner or an advanced player, we have the right program for you.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-chess-primary hover:bg-chess-secondary text-white">
              Join as a Student
            </Button>
            <Button size="lg" variant="outline" className="border-chess-primary text-chess-primary hover:bg-chess-primary hover:text-white">
              <Link to="/tutors">Become a Tutor</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
