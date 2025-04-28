
import React from 'react';
import { Button } from "@/components/ui/button";
import { ScanBarcode } from "lucide-react";

interface ScanPartProps {
  onScan: (partId: string) => void;
}

const ScanPart = ({ onScan }: ScanPartProps) => {
  // In a real app, this would integrate with device camera
  const handleScan = () => {
    // Simulating a scan for prototype
    onScan("232-A");
  };

  return (
    <div className="fixed bottom-20 inset-x-0 px-4">
      <Button 
        onClick={handleScan}
        className="w-full bg-inventory-green hover:bg-inventory-green/90 text-white h-16 text-lg font-medium rounded-lg shadow-lg flex items-center justify-center space-x-3"
      >
        <ScanBarcode className="w-8 h-8" />
        <span>Scan Part</span>
      </Button>
    </div>
  );
};

export default ScanPart;
