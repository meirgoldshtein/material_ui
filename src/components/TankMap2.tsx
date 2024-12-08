// import React, { useState } from 'react';
// import Map, { Marker, Popup } from 'react-map-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';

// interface TankLocation {
//   id: number;
//   lat: number;
//   lng: number;
//   details: {
//     unitName: string;
//     status: string;
//   };
// }

// const TankMap: React.FC = () => {
//   const [viewport, setViewport] = useState({
//     latitude: 32.0853,
//     longitude: 34.7818,
//     zoom: 15,
//     pitch: 60,  // זווית הטיה
//     bearing: 0  // סיבוב
//   });

//   const tanks: TankLocation[] = [
//     {
//       id: 1,
//       lat: 32.0853,
//       lng: 34.7818,
//       details: {
//         unitName: "גדוד 5",
//         status: "פעיל"
//       }
//     }
//   ];

//   return (
//     <Map
//       mapboxAccessToken={YOUR_MAPBOX_TOKEN}
//       initialViewState={viewport}
//       style={{height: 600, width: '100%'}}
//       mapStyle="mapbox://styles/mapbox/satellite-v9"
//       terrain={{source: 'mapbox-dem', exaggeration: 1.5}}
//     >
//       {tanks.map(tank => (
//         <Marker 
//           key={tank.id}
//           latitude={tank.lat} 
//           longitude={tank.lng}
//         >
//           <div style={{
//             width: '40px', 
//             height: '40px', 
//             backgroundColor: 'green',
//             borderRadius: '50%'
//           }} />
//         </Marker>
//       ))}
//     </Map>
//   );
// };

// export default TankMap;