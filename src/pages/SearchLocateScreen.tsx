
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppHeader from "@/components/AppHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const suggestedChips = [
  "Nearest Bin",
  "Alternate Part Available",
  "Request Restock",
  "Fastest Route"
];

const SearchLocateScreen = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [selectedChip, setSelectedChip] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.toLowerCase().includes("bracket")) {
      setSearchResults(["Bracket 232-A → Bin A3 → ETA 2 min walk"]);
    } else if (searchQuery.toLowerCase().includes("sensor")) {
      setSearchResults(["Sensor Module SM-5 → Not in stock → Alternate: SM-6 available in Bin D4"]);
    } else if (searchQuery.toLowerCase().includes("cable")) {
      setSearchResults(["Cable Harness B42 → Bin F2 → Low stock alert → ETA 4 min walk"]);
    } else if (searchQuery) {
      setSearchResults([`No exact matches for "${searchQuery}" → Try alternate search terms`]);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <AppHeader title="Find Your Parts" />
      
      <div className="p-4">
        <form onSubmit={handleSearch} className="mb-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search for parts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-10"
            />
            <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
        </form>

        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-2">AI Suggestions:</p>
          <div className="flex flex-wrap gap-2">
            {suggestedChips.map((chip) => (
              <button
                key={chip}
                onClick={() => {
                  setSelectedChip(chip);
                  if (chip === "Nearest Bin") {
                    setSearchResults(["Bracket 232-A → Bin A3 → Closest to your location"]);
                  } else if (chip === "Alternate Part Available") {
                    setSearchResults(["Sensor Module SM-5 → Alternative: SM-6 available in Bin D4"]);
                  } else if (chip === "Request Restock") {
                    setSearchResults(["Sensor Module SM-5 → Restock requested → ETA: Tomorrow 10 AM"]);
                  } else if (chip === "Fastest Route") {
                    setSearchResults([
                      "Optimized route: Bin A3 → Bin D7 → Bin F2 → Bin A1 → Total: 6 mins"
                    ]);
                  }
                }}
                className={`px-3 py-1.5 rounded-full text-sm ${
                  selectedChip === chip
                    ? "bg-inventory-blue text-white"
                    : "bg-white border border-gray-200 text-gray-700"
                }`}
              >
                {chip}
              </button>
            ))}
          </div>
        </div>

        {searchResults.length > 0 && (
          <Card className="mb-6">
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Results:</h3>
              <ul className="space-y-3">
                {searchResults.map((result, index) => (
                  <li key={index} className="bg-blue-50 p-3 rounded-md">
                    {result}
                  </li>
                ))}
              </ul>
              {selectedChip === "Fastest Route" && (
                <div className="mt-4 bg-green-50 p-3 rounded-md">
                  <p className="font-medium text-inventory-green flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    AI Note: Predicted fastest retrieval route: 6 mins
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        )}
        
        <Card className="mb-6 bg-orange-50 border-inventory-orange">
          <CardContent className="p-4">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-inventory-orange rounded-full flex items-center justify-center mr-3 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Missing Part Alert</h4>
                <p className="text-sm mt-1">Sensor Module SM-5 is currently not in stock. Check for alternatives or request restock.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Button 
          className="w-full bg-inventory-green hover:bg-inventory-green/90"
          size="lg" 
          onClick={() => navigate("/kit-verification")}
        >
          Continue to Kit Verification
        </Button>
      </div>
    </div>
  );
};

export default SearchLocateScreen;
