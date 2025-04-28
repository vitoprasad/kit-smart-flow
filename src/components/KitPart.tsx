
import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import StatusIndicator from "./StatusIndicator";

interface KitPartProps {
  partName: string;
  quantity: number;
  location: string;
  status: "in-stock" | "low-stock" | "missing";
}

export const KitPart = ({ partName, quantity, location, status }: KitPartProps) => {
  const [isFound, setIsFound] = useState(false);

  return (
    <div className={cn(
      "border rounded-lg p-4 mb-3 transition-all", 
      isFound 
        ? "bg-green-50 border-green-200" 
        : "bg-white border-gray-200"
    )}>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-medium text-lg">{partName}</h3>
          <div className="flex flex-col space-y-1 mt-2 text-sm text-gray-500">
            <div>Qty: {quantity}</div>
            <div>Location: {location}</div>
            <StatusIndicator status={status} className="mt-1" />
          </div>
        </div>
        <button
          onClick={() => setIsFound(!isFound)}
          className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center border transition-all",
            isFound
              ? "bg-inventory-green border-inventory-green text-white"
              : "border-gray-300 bg-gray-50"
          )}
        >
          {isFound && <Check className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
};

export default KitPart;
