
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AppHeader from "@/components/AppHeader";
import KitPart from "@/components/KitPart";
import { Card } from "@/components/ui/card";

const partsData = [
  {
    id: 1,
    partName: "Bracket 232-A",
    quantity: 2,
    location: "Bin A3, Row 2",
    status: "in-stock" as const,
  },
  {
    id: 2,
    partName: "Motor Switch X5",
    quantity: 1,
    location: "Bin D7, Row 1",
    status: "in-stock" as const,
  },
  {
    id: 3,
    partName: "Cable Harness B42",
    quantity: 1,
    location: "Bin F2, Row 4",
    status: "low-stock" as const,
  },
  {
    id: 4,
    partName: "Fastener Kit 101",
    quantity: 3,
    location: "Bin A1, Row 1",
    status: "in-stock" as const,
  },
  {
    id: 5,
    partName: "Sensor Module SM-5",
    quantity: 1,
    location: "Bin C5, Row 3",
    status: "missing" as const,
  },
  {
    id: 6,
    partName: "Connector Plug CP-3",
    quantity: 2,
    location: "Bin B3, Row 5",
    status: "in-stock" as const,
  },
  {
    id: 7,
    partName: "Circuit Board V2",
    quantity: 1,
    location: "Bin E4, Row 2",
    status: "low-stock" as const,
  }
];

const KitChecklistScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <AppHeader title="Kit Checklist: Assembly Line 3" />
      
      <div className="p-4">
        <Card className="mb-4 bg-white p-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold">Kit #12432</h2>
              <p className="text-sm text-gray-500">7 parts required</p>
            </div>
            <div className="bg-inventory-blue text-white px-3 py-1 rounded text-sm font-medium">
              In Progress
            </div>
          </div>
        </Card>

        <div className="mb-4">
          <p className="text-sm text-gray-500 mb-2 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            Assigned to: John Technician
          </p>
          <div className="flex items-center text-sm text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            Due in: 3 hours 28 minutes
          </div>
        </div>

        <div className="space-y-1 mb-4">
          <h3 className="font-medium">Parts Required:</h3>
          <div className="flex flex-wrap gap-2 mb-2">
            <div className="flex items-center bg-blue-50 px-2 py-1 rounded text-xs">
              <span className="w-2 h-2 bg-inventory-green rounded-full mr-1"></span>
              <span>In Stock: 4</span>
            </div>
            <div className="flex items-center bg-yellow-50 px-2 py-1 rounded text-xs">
              <span className="w-2 h-2 bg-inventory-yellow rounded-full mr-1"></span>
              <span>Low Stock: 2</span>
            </div>
            <div className="flex items-center bg-red-50 px-2 py-1 rounded text-xs">
              <span className="w-2 h-2 bg-inventory-red rounded-full mr-1"></span>
              <span>Missing: 1</span>
            </div>
          </div>
        </div>

        <div className="space-y-2 mb-6">
          {partsData.map((part) => (
            <KitPart
              key={part.id}
              partName={part.partName}
              quantity={part.quantity}
              location={part.location}
              status={part.status}
            />
          ))}
        </div>

        <Button 
          className="w-full bg-inventory-blue hover:bg-inventory-blue/90" 
          size="lg"
          onClick={() => navigate("/search-locate")}
        >
          Start Locating Parts
        </Button>
      </div>
    </div>
  );
};

export default KitChecklistScreen;
