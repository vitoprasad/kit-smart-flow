import React, { useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ScanBarcode } from "lucide-react";

interface ScanPartProps {
  onScan: (partId: string) => void;
}

const ScanPart = ({ onScan }: ScanPartProps) => {
  const [position, setPosition] = useState({ x: window.innerWidth - 80, y: window.innerHeight / 2 });
  const [dragging, setDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setDragging(true);
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    document.body.style.userSelect = 'none';
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!dragging) return;
    setPosition({
      x: e.clientX - offset.current.x,
      y: e.clientY - offset.current.y,
    });
  };

  const handleMouseUp = () => {
    setDragging(false);
    document.body.style.userSelect = '';
  };

  React.useEffect(() => {
    if (dragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging]);

  const handleScan = () => {
    onScan("232-A");
  };

  return (
    <div
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        zIndex: 1000,
        cursor: dragging ? 'grabbing' : 'grab',
        transition: dragging ? 'none' : 'box-shadow 0.2s',
      }}
      onMouseDown={handleMouseDown}
      title="Scan Part"
      aria-label="Scan Part"
    >
      <Button
        onClick={handleScan}
        className="rounded-full w-14 h-14 min-w-0 p-0 bg-inventory-green hover:bg-inventory-green/90 shadow-lg flex items-center justify-center"
        style={{ boxShadow: dragging ? '0 0 0 4px #4CAF50' : undefined }}
      >
        <ScanBarcode className="w-7 h-7" />
      </Button>
    </div>
  );
};

export default ScanPart;
