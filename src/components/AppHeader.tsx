
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface AppHeaderProps {
  title: string;
  showBackButton?: boolean;
  className?: string;
}

export const AppHeader = ({ title, showBackButton = true, className }: AppHeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className={cn("bg-white border-b border-gray-200 py-4 px-4 flex items-center", className)}>
      {showBackButton && (
        <button 
          onClick={() => navigate(-1)}
          className="mr-4 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-100"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
      )}
      <h1 className="text-xl font-semibold">{title}</h1>
    </header>
  );
};

export default AppHeader;
