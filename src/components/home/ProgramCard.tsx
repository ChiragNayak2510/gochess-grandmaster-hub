
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface ProgramCardProps {
  title: string;
  description: string;
  topics: string[];
  audience: string;
  icon: React.ReactNode;
  id: string;
  levels?: string[];
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  description,
  topics,
  audience,
  icon,
  id,
  levels
}) => {
  return (
    <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg" id={id}>
      <CardHeader className="bg-gray-50 border-b">
        <div className="flex items-center gap-3">
          <div className="text-chess-primary">{icon}</div>
          <CardTitle>{title}</CardTitle>
        </div>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Course Topics</h4>
          <ul className="list-disc pl-5 space-y-1">
            {topics.map((topic, index) => (
              <li key={index} className="text-gray-700">{topic}</li>
            ))}
          </ul>
        </div>
        {levels && levels.length > 0 && (
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Program Levels</h4>
            <ul className="list-disc pl-5 space-y-1">
              {levels.map((level, index) => (
                <li key={index} className="text-gray-700">{level}</li>
              ))}
            </ul>
          </div>
        )}
        <div>
          <h4 className="font-semibold mb-2">For</h4>
          <p className="text-gray-700">{audience}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end border-t pt-4">
        {id === 'hobby' ? (
          <Button className="bg-chess-primary hover:bg-chess-secondary" asChild>
            <Link to="/program/hobby">Join This Program</Link>
          </Button>
        ) : id === 'competitive' ? (
          <Button className="bg-chess-primary hover:bg-chess-secondary" asChild>
            <Link to="/program/competitive">Select This Program</Link>
          </Button>
        ) : (
          <Button className="bg-chess-primary hover:bg-chess-secondary" asChild>
            <Link to="/program/career">Select This Program</Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProgramCard;
