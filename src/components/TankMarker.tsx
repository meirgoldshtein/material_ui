import React from 'react';
import { MilitaryTech } from '@mui/icons-material'; // שימוש ב-MUI במקום lucide

interface TankMarkerProps {
  onClick: () => void;
  position: {
    x: number;
    y: number;
  };
}

const TankMarker: React.FC<TankMarkerProps> = ({ onClick, position }) => {
  return (
    <div 
      onClick={onClick} 
      className="cursor-pointer hover:scale-110 transition-transform"
      style={{
        position: 'absolute',
        left: `${position.x}%`, 
        top: `${position.y}%`
      }}
    >
      <MilitaryTech 
        fontSize="large" 
        color="success"
        className="shadow-lg rounded-full"
      />
    </div>
  );
};

export default TankMarker;