
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/ui/section-title';
import TutorCard from '@/components/tutors/TutorCard';

const OurTutors = () => {
  const tutors = [
    {
      id: 1,
      name: "Vikram Sharma",
      title: "FIDE Master",
      rating: "FM, 2350 FIDE",
      specialization: "Advanced Tactics & Strategy",
      experience: "10+ years",
      image: "https://images.unsplash.com/photo-1532318065232-2ba7c6676cd5?q=80&w=480&auto=format&fit=crop",
      description: "Specializes in advanced positional play and endgame techniques. Coached multiple national-level junior players."
    },
    {
      id: 2,
      name: "Priya Desai",
      title: "Woman International Master",
      rating: "WIM, 2150 FIDE",
      specialization: "Opening Preparation",
      experience: "8 years",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=480&auto=format&fit=crop",
      description: "Expert in teaching opening principles and preparation. Author of 'Strategic Planning in Chess Openings'."
    },
    {
      id: 3,
      name: "Anand Kumar",
      title: "National Instructor",
      rating: "1950 FIDE",
      specialization: "Youth Training",
      experience: "6 years",
      image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=480&auto=format&fit=crop",
      description: "Passionate about teaching chess to beginners and young players. Developed a unique curriculum for kids aged 6-12."
    },
    {
      id: 4,
      name: "Meera Patel",
      title: "FIDE Instructor",
      rating: "2050 FIDE",
      specialization: "Middle Game Strategy",
      experience: "7 years",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=480&auto=format&fit=crop",
      description: "Former state champion with expertise in positional understanding and strategic planning in middle games."
    },
    {
      id: 5,
      name: "Rajiv Singh",
      title: "International Master",
      rating: "IM, 2400 FIDE",
      specialization: "Tournament Preparation",
      experience: "12 years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=480&auto=format&fit=crop",
      description: "Specializes in preparing players for international competitions. Former national champion with over 20 tournament wins."
    },
    {
      id: 6,
      name: "Aisha Khan",
      title: "National Master",
      rating: "NM, 2100 FIDE",
      specialization: "Endgame Techniques",
      experience: "5 years",
      image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=480&auto=format&fit=crop",
      description: "Known for her endgame expertise. Coached multiple junior players to national championship titles."
    },
    {
      id: 7,
      name: "Sanjay Gupta",
      title: "FIDE Trainer",
      rating: "2250 FIDE",
      specialization: "Tactical Patterns",
      experience: "9 years",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=480&auto=format&fit=crop",
      description: "Tactical genius who focuses on pattern recognition and calculation training. Author of 'Tactical Puzzles for Advanced Players'."
    },
    {
      id: 8,
      name: "Divya Menon",
      title: "Woman Grandmaster",
      rating: "WGM, 2300 FIDE",
      specialization: "Comprehensive Training",
      experience: "14 years",
      image: "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?q=80&w=480&auto=format&fit=crop",
      description: "Provides comprehensive training for serious competitors. Multiple international tournament winner with expertise in all phases of the game."
    },
    {
      id: 9,
      name: "Arjun Reddy",
      title: "Candidate Master",
      rating: "CM, 2200 FIDE",
      specialization: "Online Coaching",
      experience: "6 years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=480&auto=format&fit=crop",
      description: "Pioneer in online chess coaching methodologies. Has coached students from over 15 countries across 5 continents."
    },
    {
      id: 10,
      name: "Neha Sharma",
      title: "FIDE Instructor",
      rating: "2000 FIDE",
      specialization: "Female Chess Development",
      experience: "8 years",
      image: "https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=480&auto=format&fit=crop",
      description: "Focused on promoting chess among female players. Has organized numerous women's chess events and training camps."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gray-50 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Meet Our Expert Chess Tutors"
              subtitle="Learn from experienced coaches dedicated to your chess development"
              center
            />
          </div>
        </div>

        {/* Tutors Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tutors.map(tutor => (
                <TutorCard key={tutor.id} tutor={tutor} />
              ))}
            </div>
          </div>
        </section>

        {/* Join as Tutor CTA */}
        <section className="py-16 bg-chess-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Teaching Team</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Are you passionate about chess and enjoy teaching others? Become a tutor at GoChess and share your knowledge with students worldwide.
            </p>
            <div className="flex justify-center">
              <a 
                href="/tutors" 
                className="inline-block px-6 py-3 bg-white text-chess-primary font-medium rounded-md hover:bg-gray-100 transition-colors"
              >
                Apply to Become a Tutor
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurTutors;
