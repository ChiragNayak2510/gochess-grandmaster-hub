
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Trophy, Target } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative chess-pattern">
      <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent"></div>
      <div className="container mx-auto px-4 py-24 md:py-36 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block bg-chess-primary/10 text-chess-primary font-medium px-4 py-2 rounded-full mb-6">
            Mastery Through Strategic Thinking
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Transform Your <span className="text-chess-primary">Chess Game.</span> Elevate Your <span className="text-chess-primary">Life Strategy.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed">
            Join India's premier chess learning community where ambitious players become strategic thinkers. Expert coaching, structured growth paths, measurable outcomes.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Link to="/student-registration">
              <Button size="lg" className="bg-chess-primary hover:bg-chess-secondary text-white text-lg group">
                Start Your Chess Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/our-tutors">
              <Button size="lg" variant="outline" className="border-chess-primary text-chess-primary hover:bg-chess-primary hover:text-white text-lg">
                Meet Our Expert Coaches
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-chess-primary/10 p-2 rounded-full">
                <Brain className="h-6 w-6 text-chess-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Strategic Thinking</h3>
                <p className="text-sm text-gray-600">Develop elite decision-making skills</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="bg-chess-primary/10 p-2 rounded-full">
                <Trophy className="h-6 w-6 text-chess-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Measurable Progress</h3>
                <p className="text-sm text-gray-600">Avg. 300+ rating improvement</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="bg-chess-primary/10 p-2 rounded-full">
                <Target className="h-6 w-6 text-chess-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Career Advantage</h3>
                <p className="text-sm text-gray-600">Chess skills that transfer to life</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
