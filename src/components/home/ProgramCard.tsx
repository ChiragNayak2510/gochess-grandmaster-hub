
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface Level {
  name: string;
  sessions: number;
  path: string;
}

interface ProgramCardProps {
  id: string;
  title: string;
  description: string;
  topics: string[];
  audience: string;
  icon: React.ReactNode;
  levels?: Level[];
}

// Helper function to generate program links
const getProgramLink = (programId: string) => {
  return `/program/${programId}`;
};

const ProgramCard = ({
  id,
  title,
  description,
  topics,
  audience,
  icon,
  levels
}: ProgramCardProps) => {
  const navigate = useNavigate();

  const handleLevelClick = (path: string) => {
    navigate(path);
  };

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
      <CardContent className="p-0">
        <div className="bg-chess-primary text-white p-4 flex items-start gap-3">
          <div className="bg-white/20 p-2 rounded-full">
            {icon}
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        
        <div className="p-6 space-y-4">
          <p className="text-gray-700">{description}</p>
          
          <div>
            <h4 className="font-semibold mb-2">What You'll Learn:</h4>
            <ul className="space-y-1">
              {topics.map((topic, index) => (
                <li key={index} className="flex items-center">
                  <span className="bg-chess-secondary/10 text-chess-secondary w-2 h-2 rounded-full inline-block mr-2"></span>
                  <span className="text-gray-700 text-sm">{topic}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {levels && levels.length > 0 && (
            <div>
              <h4 className="font-semibold mb-2">Levels:</h4>
              <div className="flex flex-wrap gap-2">
                {levels.map((level, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-gray-200 text-gray-700 cursor-pointer hover:bg-gray-300 transition-colors"
                    onClick={() => handleLevelClick(level.path)}
                  >
                    {`${level.name} - ${level.sessions} sessions`}
                  </Badge>
                ))}
              </div>
            </div>
          )}
          
          <div>
            <h4 className="font-semibold mb-2">Perfect For:</h4>
            <p className="text-sm text-gray-600">{audience}</p>
          </div>
          
          <Link to={getProgramLink(id)}>
            <Button className="w-full bg-chess-primary hover:bg-chess-secondary">
              Join This Program
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgramCard;
