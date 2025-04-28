
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SuccessScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Kit Complete!</h1>
        <p className="text-xl text-gray-700 mb-6">Kit #12432 ready for Assembly Line 3!</p>
        
        <div className="flex flex-col space-y-3">
          <Button 
            onClick={() => navigate("/")} 
            className="bg-inventory-blue hover:bg-inventory-blue/90"
          >
            Return to Dashboard
          </Button>
          <Button 
            onClick={() => navigate("/")} 
            variant="outline"
          >
            View Next Task
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessScreen;
