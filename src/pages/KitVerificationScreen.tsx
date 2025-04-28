import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import AppHeader from "@/components/AppHeader";

const KitVerificationScreen = () => {
  const navigate = useNavigate();
  const [photoTaken, setPhotoTaken] = useState(false);
  const [verified, setVerified] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleTakePhoto = () => {
    setPhotoTaken(true);
  };

  const handleComplete = () => {
    setShowSuccess(true);
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <AppHeader title="Scan Kit for Completion" />
      
      {!showSuccess ? (
        <div className="p-4">
          <div className="mb-6">
            <div className="bg-white rounded-lg p-4 border border-dashed border-gray-300 mb-4">
              {photoTaken ? (
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                    alt="Kit photo" 
                    className="w-full h-64 object-cover rounded-md" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-green-500/20 backdrop-blur-sm w-full h-full flex items-center justify-center rounded-md">
                      <div className="bg-white rounded-full p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 bg-gray-50 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mb-3">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                    <circle cx="12" cy="13" r="4"></circle>
                  </svg>
                  <p className="text-gray-500 text-sm mb-4">Take a photo of the assembled kit</p>
                  <Button 
                    onClick={handleTakePhoto}
                    className="bg-inventory-blue hover:bg-inventory-blue/90"
                  >
                    Take Photo
                  </Button>
                </div>
              )}
            </div>
          </div>

          <Card className="mb-6">
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Kit Verification Checklist</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <Checkbox id="item1" checked={photoTaken} className="mt-0.5" />
                  <label htmlFor="item1" className="text-sm">Photo verification completed</label>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox id="item2" className="mt-0.5" />
                  <label htmlFor="item2" className="text-sm">All required parts present</label>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox id="item3" className="mt-0.5" />
                  <label htmlFor="item3" className="text-sm">No damaged parts identified</label>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox 
                    id="verified" 
                    checked={verified}
                    onCheckedChange={() => setVerified(!verified)}
                    className="mt-0.5"
                  />
                  <label htmlFor="verified" className="text-sm font-medium">All parts verified</label>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-1 bg-gray-200 rounded-full mx-1"></div>
            <div className="w-12 h-1 bg-gray-200 rounded-full mx-1"></div>
            <div className="w-12 h-1 bg-inventory-blue rounded-full mx-1"></div>
            <div className="w-12 h-1 bg-gray-200 rounded-full mx-1"></div>
          </div>

          <Button 
            className="w-full bg-inventory-green hover:bg-inventory-green/90"
            size="lg"
            disabled={!photoTaken || !verified}
            onClick={handleComplete}
          >
            Mark Kit Complete
          </Button>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4 animate-in slide-in-from-bottom duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-green-600 mb-2 animate-in slide-in-from-bottom delay-75">Kit Complete!</h2>
            <p className="text-gray-600 mb-4 animate-in slide-in-from-bottom delay-150">Kit #12432 ready for Assembly Line 3!</p>
            <p className="text-sm text-gray-500 animate-in slide-in-from-bottom delay-200">Redirecting to dashboard...</p>
            <div className="mt-4 w-full bg-gray-200 rounded-full h-2 animate-in slide-in-from-bottom delay-300">
              <div className="bg-inventory-blue h-2 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KitVerificationScreen;
