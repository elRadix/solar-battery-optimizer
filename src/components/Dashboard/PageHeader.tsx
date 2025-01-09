import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

interface PageHeaderProps {
  title: string;
  description: string;
  goal: string;
  achievement: string;
}

export const PageHeader = ({ title, description, goal, achievement }: PageHeaderProps) => {
  return (
    <div className="space-y-4 mb-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{title}</h1>
        <Link to="/">
          <Button variant="outline" size="sm">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
      
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <p className="text-muted-foreground">{description}</p>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="font-semibold mb-2">Goal</h3>
                <p className="text-sm text-muted-foreground">{goal}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Achievement</h3>
                <p className="text-sm text-muted-foreground">{achievement}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};