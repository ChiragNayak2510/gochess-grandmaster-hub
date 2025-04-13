
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';

interface ProgramEnrollmentFormProps {
  programType: 'hobby' | 'competitive' | 'career';
}

const ProgramEnrollmentForm: React.FC<ProgramEnrollmentFormProps> = ({ programType }) => {
  const getProgramTitle = () => {
    switch (programType) {
      case 'hobby':
        return 'Hobby Learners';
      case 'competitive':
        return 'Competitive Players';
      case 'career':
        return 'Career-Oriented Coaching';
      default:
        return 'Chess Program';
    }
  };

  const getLevelOptions = () => {
    switch (programType) {
      case 'hobby':
        return [
          { value: 'beginner1', label: 'Beginner Level 1' },
          { value: 'beginner2', label: 'Beginner Level 2' },
          { value: 'beginner3', label: 'Beginner Level 3' },
        ];
      case 'competitive':
        return [
          { value: 'intermediateA', label: 'Intermediate A' },
          { value: 'intermediateB', label: 'Intermediate B' },
        ];
      case 'career':
        return [
          { value: 'advanced', label: 'Elite Chess Training Program' },
        ];
      default:
        return [];
    }
  };

  return (
    <Card className="p-6 mt-8">
      <form className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="Enter your first name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Enter your last name" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="Enter your email address" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" placeholder="Enter your phone number" />
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-medium">Program Details</h3>
          <div className="space-y-2">
            <Label htmlFor="program">Program</Label>
            <Input id="program" value={getProgramTitle()} disabled />
          </div>
          <div className="space-y-2">
            <Label htmlFor="level">Level</Label>
            <Select defaultValue={getLevelOptions()[0]?.value}>
              <SelectTrigger>
                <SelectValue placeholder="Select your level" />
              </SelectTrigger>
              <SelectContent>
                {getLevelOptions().map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="experience">Chess Experience</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select your experience level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None (Complete Beginner)</SelectItem>
                <SelectItem value="basic">Basic Knowledge</SelectItem>
                <SelectItem value="casual">Casual Player</SelectItem>
                <SelectItem value="tournament">Tournament Experience</SelectItem>
                <SelectItem value="rated">Rated Player</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {programType === 'competitive' || programType === 'career' ? (
            <div className="space-y-2">
              <Label htmlFor="rating">Chess Rating (if any)</Label>
              <Input id="rating" placeholder="Enter your FIDE/National rating" />
            </div>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Additional Information</Label>
          <Textarea 
            id="message" 
            placeholder="Tell us about your chess goals, preferred schedule, or any questions you have."
            rows={4}
          />
        </div>

        <Button type="submit" className="w-full bg-chess-primary hover:bg-chess-secondary">
          Submit Enrollment
        </Button>
      </form>
    </Card>
  );
};

export default ProgramEnrollmentForm;
