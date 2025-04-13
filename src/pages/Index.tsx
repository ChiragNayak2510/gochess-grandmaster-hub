
import React from 'react';
import Hero from '@/components/home/Hero';
import Programs from '@/components/home/Programs';
import Institutions from '@/components/home/Institutions';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Programs />
        <Institutions />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
