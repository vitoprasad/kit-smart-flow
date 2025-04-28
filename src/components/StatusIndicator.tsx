
import { cn } from "@/lib/utils";

type StatusType = "in-stock" | "low-stock" | "missing";

interface StatusIndicatorProps {
  status: StatusType;
  className?: string;
}

export const StatusIndicator = ({ status, className }: StatusIndicatorProps) => {
  const getStatusClasses = () => {
    switch (status) {
      case "in-stock":
        return "bg-inventory-green";
      case "low-stock":
        return "bg-inventory-yellow";
      case "missing":
        return "bg-inventory-red";
      default:
        return "bg-gray-300";
    }
  };

  return (
    <div className={cn("flex items-center", className)}>
      <span className={cn("w-3 h-3 rounded-full mr-2", getStatusClasses())} />
      <span className="text-xs font-medium">
        {status === "in-stock" && "In Stock"}
        {status === "low-stock" && "Low Stock"}
        {status === "missing" && "Missing"}
      </span>
    </div>
  );
};

export default StatusIndicator;
