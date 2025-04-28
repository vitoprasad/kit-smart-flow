import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const NotificationScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md animate-in fade-in duration-300 border-2 border-inventory-green">
        <CardHeader className="bg-inventory-green text-white text-center py-6">
          <div className="flex justify-center mb-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-inventory-blue">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-1">New Job Assigned!</h2>
          <p className="text-white/80">Requires immediate attention</p>
        </CardHeader>
        <CardContent className="py-6">
          <div className="space-y-4">
            <div className="border-l-4 border-inventory-green pl-3 py-1">
              <p className="text-lg font-medium">Prepare Kit #12432</p>
              <p className="text-gray-600">For Assembly Line 3</p>
            </div>
            
            <div className="bg-green-50 p-3 rounded-md">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-inventory-green rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <p className="text-inventory-green font-medium">7 parts required • Priority: High</p>
              </div>
            </div>

            <div className="text-sm text-gray-500">
              <p>Assigned: Today, 10:32 AM</p>
              <p>Deadline: Today, 2:00 PM</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full bg-inventory-green hover:bg-inventory-green/90 text-white" 
            size="lg"
            onClick={() => navigate("/kit-checklist")}
          >
            View Kit Details
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NotificationScreen;
