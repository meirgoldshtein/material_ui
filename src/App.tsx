import React from 'react';
import TankMap from './components/TankMap';
import Military3DMap from './components/Military3DMap';
const demoTanks = [
  { 
    id: 1, 
    lat: 32.0853,  // תל אביב
    lng: 34.7818, 
    details: {
      unitName: "גדוד 5",
      status: "פעיל",
      commander: "רס״ן כהן",
      location: "גזרת צפון",
      batteryLevel: 85
    }
  },
  { 
    id: 2, 
    lat: 31.7957, // באר שבע
    lng: 34.6837, 
    details: {
      unitName: "גדוד 7", 
      status: "בהמתנה",
      commander: "רס״ן לוי",
      location: "גזרת דרום",
      batteryLevel: 62
    }
  },
  { 
    id: 3, 
    lat: 32.8439, // חיפה
    lng: 34.9896, 
    details: {
      unitName: "גדוד 3", 
      status: "בתנועה",
      commander: "רס״ן אברהמי",
      location: "גזרת מרכז",
      batteryLevel: 95
    }
  }
];
const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4 text-center">מפת כוחות צה״ל</h1>
      <TankMap initialTanks={demoTanks} />
    </div>
  );
};

export default App;