
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="border-b py-4 px-4 md:px-6 bg-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/9cad5bba-a5f1-41c7-a40b-7c27a774caa3.png" 
            alt="GoChess Logo" 
            className="h-14 md:h-16" 
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="font-medium hover:text-chess-secondary transition-colors">
            Home
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-medium hover:text-chess-secondary transition-colors bg-transparent">Courses</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4">
                    <Link to="/program/hobby" className="block p-3 hover:bg-gray-100 rounded-md">Hobby Learners</Link>
                    <Link to="/program/competitive" className="block p-3 hover:bg-gray-100 rounded-md">Competitive Players</Link>
                    <Link to="/program/career" className="block p-3 hover:bg-gray-100 rounded-md">Career-Oriented Coaching</Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Link to="/our-tutors" className="font-medium hover:text-chess-secondary transition-colors">
            Our Tutors
          </Link>
          <Link to="/contact" className="font-medium hover:text-chess-secondary transition-colors">
            Contact
          </Link>
          <Link to="/tutors" className="font-medium hover:text-chess-secondary transition-colors">
            Become a Tutor
          </Link>
          <Button className="bg-chess-primary hover:bg-chess-secondary">
            Join as Student
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white z-50 border-b shadow-lg">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="font-medium py-2 hover:text-chess-secondary transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <div className="py-2">
              <p className="font-medium mb-2">Courses</p>
              <div className="pl-4 space-y-2">
                <Link 
                  to="/program/hobby" 
                  className="block py-1 hover:text-chess-secondary transition-colors"
                  onClick={toggleMenu}
                >
                  Hobby Learners
                </Link>
                <Link 
                  to="/program/competitive" 
                  className="block py-1 hover:text-chess-secondary transition-colors"
                  onClick={toggleMenu}
                >
                  Competitive Players
                </Link>
                <Link 
                  to="/program/career" 
                  className="block py-1 hover:text-chess-secondary transition-colors"
                  onClick={toggleMenu}
                >
                  Career-Oriented Coaching
                </Link>
              </div>
            </div>
            <Link 
              to="/our-tutors" 
              className="font-medium py-2 hover:text-chess-secondary transition-colors"
              onClick={toggleMenu}
            >
              Our Tutors
            </Link>
            <Link 
              to="/contact" 
              className="font-medium py-2 hover:text-chess-secondary transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link 
              to="/tutors" 
              className="font-medium py-2 hover:text-chess-secondary transition-colors"
              onClick={toggleMenu}
            >
              Become a Tutor
            </Link>
            <Button className="bg-chess-primary hover:bg-chess-secondary w-full">
              Join as Student
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
