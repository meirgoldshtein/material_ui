import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// הגדרת אייקון מותאם
const tankIcon = L.icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/3004/3004613.png',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

interface TankLocation {
  id: number;
  lat: number;
  lng: number;
  details: {
    unitName: string;
    status: string;
    commander: string;
    location: string;
    batteryLevel: number;
  };
}

interface TankMapProps {
  initialTanks: TankLocation[];
}

const TankMap: React.FC<TankMapProps> = ({ initialTanks }) => {
  return (
    <MapContainer 
      center={[32.0853, 34.7818]} // מרכז הארץ
      zoom={8} 
      style={{ height: '600px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      
      {initialTanks.map(tank => (
        <Marker 
          key={tank.id} 
          position={[tank.lat, tank.lng]} 
          icon={tankIcon}
        >
          <Popup>
            <div>
              <h3 className="font-bold">{tank.details.unitName}</h3>
              <p>סטטוס: {tank.details.status}</p>
              <p>מפקד: {tank.details.commander}</p>
              <p>מיקום: {tank.details.location}</p>
              <div className="flex items-center">
                רמת סוללה: 
                <div 
                  className="ml-2 h-2 bg-green-500 rounded"
                  style={{width: `${tank.details.batteryLevel}%`}}
                />
                {tank.details.batteryLevel}%
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default TankMap;