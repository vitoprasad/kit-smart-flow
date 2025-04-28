
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col">
      <header className="bg-inventory-blue text-white p-4 rounded-lg shadow-md mb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Smart Inventory Kitting</h1>
          <button className="p-2 rounded-full hover:bg-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </button>
        </div>
        <p className="text-white/80 mt-1">UX Prototype</p>
      </header>
      
      <Card className="mb-6 bg-white shadow-md">
        <CardHeader className="pb-2">
          <h2 className="text-xl font-semibold">Smart Inventory Kitting Workflow</h2>
          <p className="text-sm text-gray-500">Interactive prototype for kitting process</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center py-2 border-b">
              <div className="w-8 h-8 bg-inventory-blue rounded-full flex items-center justify-center text-white mr-3">1</div>
              <div>
                <p className="font-medium">Job Assignment Notification</p>
                <p className="text-sm text-gray-500">Receive new kitting task</p>
              </div>
            </div>
            
            <div className="flex items-center py-2 border-b">
              <div className="w-8 h-8 bg-inventory-blue rounded-full flex items-center justify-center text-white mr-3">2</div>
              <div>
                <p className="font-medium">Interactive Kit Checklist</p>
                <p className="text-sm text-gray-500">View parts with real-time status</p>
              </div>
            </div>
            
            <div className="flex items-center py-2 border-b">
              <div className="w-8 h-8 bg-inventory-blue rounded-full flex items-center justify-center text-white mr-3">3</div>
              <div>
                <p className="font-medium">AI Search & Locate</p>
                <p className="text-sm text-gray-500">Find parts with AI assistance</p>
              </div>
            </div>
            
            <div className="flex items-center py-2">
              <div className="w-8 h-8 bg-inventory-blue rounded-full flex items-center justify-center text-white mr-3">4</div>
              <div>
                <p className="font-medium">Visual Kit Verification</p>
                <p className="text-sm text-gray-500">Scan and verify completion</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="space-y-4">
        <Button 
          className="w-full bg-inventory-blue hover:bg-inventory-blue/90 h-14 text-lg"
          onClick={() => navigate("/notification")}
        >
          Start Prototype Demo
        </Button>
        
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="h-12" onClick={() => navigate("/notification")}>
            Job Notification
          </Button>
          <Button variant="outline" className="h-12" onClick={() => navigate("/kit-checklist")}>
            Kit Checklist
          </Button>
          <Button variant="outline" className="h-12" onClick={() => navigate("/search-locate")}>
            Search & Locate
          </Button>
          <Button variant="outline" className="h-12" onClick={() => navigate("/kit-verification")}>
            Kit Verification
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
