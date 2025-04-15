import React from 'react';
import { useNavigate } from 'react-router-dom';
import SectionTitle from '@/components/ui/section-title';
import ProgramCard from '@/components/home/ProgramCard';
import { Award, Target, Trophy } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      id: 'hobby',
      title: 'Foundation Program',
      description: 'A structured learning path for beginners to build strong chess fundamentals.',
      topics: [
        'Chess basics and rules',
        'Opening principles',
        'Basic tactics and strategies',
        'Endgame essentials',
        'Common patterns'
      ],
      levels: [
        { name: 'Beginner Level 1', sessions: 10, path: '/program/hobby#level1' },
        { name: 'Beginner Level 2', sessions: 15, path: '/program/hobby#level2' },
        { name: 'Beginner Level 3', sessions: 30, path: '/program/hobby#level3' }
      ],
      audience: 'Perfect for beginners and intermediate players looking to establish a solid foundation in chess.',
      icon: <Award size={28} />
    },
    {
      id: 'competitive',
      title: 'Competitive Players',
      description: 'For those looking to participate in tournaments and improve their rating.',
      topics: [
        'Advanced opening repertoire',
        'Middlegame planning',
        'Tactical patterns',
        'Strategic concepts',
        'Tournament preparation'
      ],
      levels: [
        'Intermediate A - Tournament Preparation',
        'Intermediate B - Advanced Strategies'
      ],
      audience: 'Players with basic knowledge who want to compete in tournaments and improve their rating.',
      icon: <Trophy size={28} />
    },
    {
      id: 'career',
      title: 'Career-Oriented Coaching',
      description: 'Rigorous training for serious players aiming for professional chess careers.',
      topics: [
        'Professional opening analysis',
        'Advanced strategic planning',
        'Complex endgame theory',
        'Psychological preparation',
        'Personalized game analysis'
      ],
      audience: 'Serious players aiming for titles, high ratings, and professional chess careers.',
      icon: <Target size={28} />
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Chess Training Programs" 
          subtitle="Comprehensive learning paths designed for players at every level"
          center
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {programs.map((program) => (
            <ProgramCard
              key={program.id}
              {...program}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
