import React, { useEffect, useRef, useState } from 'react';
import { LoadScript, GoogleMap } from '@react-google-maps/api';
import * as THREE from 'three';

interface TankLocation {
  id: number;
  lat: number;
  lng: number;
  details: {
    unitName: string;
    status: string;
    commander: string;
  };
}

const Military3DMap: React.FC = () => {
  const mapRef = useRef<google.maps.Map | null>(null);
  const threeLayerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.Renderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  const tanks: TankLocation[] = [
    {
      id: 1,
      lat: 32.0853,
      lng: 34.7818,
      details: {
        unitName: "גדוד 5",
        status: "פעיל",
        commander: "רס״ן כהן"
      }
    },
    {
      id: 2,
      lat: 32.1,
      lng: 34.8,
      details: {
        unitName: "גדוד 7",
        status: "בהמתנה",
        commander: "רס״ן לוי"
      }
    }
  ];

  useEffect(() => {
    if (!threeLayerRef.current) return;

    // הכנת סצנת Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(threeLayerRef.current.clientWidth, threeLayerRef.current.clientHeight);
    threeLayerRef.current.appendChild(renderer.domElement);

    // הוספת תאורה
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // יצירת טנקים
    tanks.forEach(tank => {
      const tankGeometry = new THREE.BoxGeometry(10, 5, 15);
      const tankMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
      const tankMesh = new THREE.Mesh(tankGeometry, tankMaterial);
      
      // מיקום הטנק
      tankMesh.position.x = (tank.lng - 34.7818) * 1000;
      tankMesh.position.y = (tank.lat - 32.0853) * 1000;
      tankMesh.position.z = 10; // גובה מעל הקרקע

      scene.add(tankMesh);
    });

    camera.position.z = 100;

    // פונקציית אנימציה
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    sceneRef.current = scene;
    rendererRef.current = renderer;
    cameraRef.current = camera;

    return () => {
      // ניקוי משאבים
      renderer.dispose();
      threeLayerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  const mapOptions = {
    center: { lat: 32.0853, lng: 34.7818 },
    zoom: 15,
    mapTypeId: 'satellite', // מפה לווינית
    tilt: 45, // זווית הטיה
    heading: 0
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY!}>
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          options={mapOptions}
          onLoad={(map) => {
            mapRef.current = map;
          }}
        />
        <div 
          ref={threeLayerRef} 
          style={{
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            pointerEvents: 'none'
          }} 
        />
      </div>
    </LoadScript>
  );
};

export default Military3DMap;