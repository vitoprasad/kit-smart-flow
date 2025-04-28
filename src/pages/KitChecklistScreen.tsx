import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AppHeader from "@/components/AppHeader";
import KitPart from "@/components/KitPart";
import ScanPart from "@/components/ScanPart";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

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
  const [scannedParts, setScannedParts] = useState<string[]>([]);

  const handleScan = (partId: string) => {
    setScannedParts(prev => [...prev, partId]);
    toast.success("Part scanned successfully", {
      description: `Part ${partId} has been added to the kit`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col pb-24">
      <AppHeader title="Kit Checklist: Assembly Line 3" />
      
      <div className="p-5">
        <Card className="mb-6 bg-white p-5 shadow-md border-l-4 border-l-inventory-green">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">Kit #12432</h2>
              <p className="text-base text-gray-600">7 parts required</p>
            </div>
            <div className="bg-inventory-green text-white px-4 py-2 rounded-md text-base font-medium">
              In Progress
            </div>
          </div>
        </Card>

        <div className="mb-5">
          <p className="text-base text-gray-600 mb-3 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            Assigned to: John Technician
          </p>
          <div className="flex items-center text-base text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            Due in: 3 hours 28 minutes
          </div>
        </div>

        <div className="space-y-2 mb-5">
          <h3 className="text-lg font-medium">Parts Required:</h3>
          <div className="flex flex-wrap gap-3 mb-3">
            <div className="flex items-center bg-blue-50 px-4 py-2 rounded-md text-base">
              <span className="w-3 h-3 bg-inventory-green rounded-full mr-2"></span>
              <span>In Stock: 4</span>
            </div>
            <div className="flex items-center bg-yellow-50 px-4 py-2 rounded-md text-base">
              <span className="w-3 h-3 bg-inventory-yellow rounded-full mr-2"></span>
              <span>Low Stock: 2</span>
            </div>
            <div className="flex items-center bg-red-50 px-4 py-2 rounded-md text-base">
              <span className="w-3 h-3 bg-inventory-red rounded-full mr-2"></span>
              <span>Missing: 1</span>
            </div>
          </div>
        </div>

        <div className="space-y-3 mb-8">
          {partsData.map((part) => (
            <KitPart
              key={part.id}
              partName={part.partName}
              quantity={part.quantity}
              location={part.location}
              status={part.status}
              isScanned={scannedParts.includes(part.partName.split(" ")[1])}
            />
          ))}
        </div>

        <div className="flex items-center justify-center mb-8">
          <div className="w-16 h-2 bg-gray-200 rounded-full mx-2"></div>
          <div className="w-16 h-2 bg-gray-200 rounded-full mx-2"></div>
          <div className="w-16 h-2 bg-inventory-green rounded-full mx-2"></div>
          <div className="w-16 h-2 bg-gray-200 rounded-full mx-2"></div>
        </div>

        <Button 
          className="w-full bg-inventory-green hover:bg-inventory-green/90 text-white text-lg py-8 mb-4"
          size="lg"
          onClick={() => navigate("/search-locate")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          Start Locating Parts
        </Button>
      </div>

      <ScanPart onScan={handleScan} />
    </div>
  );
};

export default KitChecklistScreen;
