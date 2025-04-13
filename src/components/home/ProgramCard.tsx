
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface ProgramCardProps {
  title: string;
  description: string;
  topics: string[];
  audience: string;
  icon: React.ReactNode;
  id: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  description,
  topics,
  audience,
  icon,
  id
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
        <div>
          <h4 className="font-semibold mb-2">For</h4>
          <p className="text-gray-700">{audience}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end border-t pt-4">
        <Button className="bg-chess-primary hover:bg-chess-secondary">Join This Program</Button>
      </CardFooter>
    </Card>
  );
};

export default ProgramCard;
