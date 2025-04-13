
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/ui/section-title';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock, BookOpen, Users, Target } from 'lucide-react';
import ProgramEnrollmentForm from '@/components/programs/ProgramEnrollmentForm';

const ProgramHobby = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gray-50 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Hobby Learners Program"
              subtitle="Perfect for beginners and casual players looking to learn the fundamentals and enjoy the game"
              center
            />
            <div className="flex justify-center mt-4">
              <Badge className="bg-chess-secondary px-4 py-1 text-white">Beginner Friendly</Badge>
            </div>
          </div>
        </div>

        {/* Program Levels */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Choose Your Learning Path</h2>
            
            <Tabs defaultValue="level1" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="level1">Beginner Level 1</TabsTrigger>
                <TabsTrigger value="level2">Beginner Level 2</TabsTrigger>
                <TabsTrigger value="level3">Beginner Level 3</TabsTrigger>
              </TabsList>
              
              <TabsContent value="level1">
                <Card>
                  <CardHeader>
                    <CardTitle>Beginner Level 1: Introduction to Chess</CardTitle>
                    <CardDescription>Start your chess journey with the essentials</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-chess-primary" />
                          <span>8 weeks program</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-5 w-5 text-chess-primary" />
                          <span>12 lessons</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-5 w-5 text-chess-primary" />
                          <span>Small group classes</span>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-2">What You'll Learn</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Basic rules and piece movement</li>
                          <li>Set up the board correctly</li>
                          <li>Understand check, checkmate, and stalemate</li>
                          <li>Simple captures and exchanges</li>
                          <li>Introduction to basic tactics</li>
                          <li>Simple endgames</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-2">Perfect For</h3>
                        <p>Absolute beginners with little to no chess experience who want to learn the fundamentals of the game.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="level2">
                <Card>
                  <CardHeader>
                    <CardTitle>Beginner Level 2: Building Foundation</CardTitle>
                    <CardDescription>Strengthen your chess knowledge and develop your skills</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-chess-primary" />
                          <span>10 weeks program</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-5 w-5 text-chess-primary" />
                          <span>15 lessons</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-5 w-5 text-chess-primary" />
                          <span>Small group classes</span>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-2">What You'll Learn</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Basic opening principles</li>
                          <li>Common tactical patterns (pins, forks, skewers)</li>
                          <li>Basic pawn structures</li>
                          <li>Piece coordination</li>
                          <li>Simple attacking patterns</li>
                          <li>Basic endgame techniques</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-2">Perfect For</h3>
                        <p>Players who understand the basic rules and want to develop a deeper understanding of strategy and tactics.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="level3">
                <Card>
                  <CardHeader>
                    <CardTitle>Beginner Level 3: Basic Strategies</CardTitle>
                    <CardDescription>Develop strategic thinking and start playing with confidence</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-chess-primary" />
                          <span>12 weeks program</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-5 w-5 text-chess-primary" />
                          <span>18 lessons</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Target className="h-5 w-5 text-chess-primary" />
                          <span>Practical exercises</span>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-2">What You'll Learn</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Developing a basic opening repertoire</li>
                          <li>Planning in the middlegame</li>
                          <li>Common endgame positions</li>
                          <li>Understanding piece values in different situations</li>
                          <li>Calculation techniques</li>
                          <li>Game analysis methods</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-2">Perfect For</h3>
                        <p>Players with some experience who want to start playing in casual tournaments or online rated games with more confidence.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Enrollment Form */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <SectionTitle
                title="Enroll in the Hobby Learners Program"
                subtitle="Fill in your details to join our next batch"
                center
              />
              <ProgramEnrollmentForm programType="hobby" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProgramHobby;
