
import React, { useEffect, useState } from 'react';

const Missions = () => {
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    // Fetch data from an API (e.g., SpaceX or NASA)
    fetch('https://api.spacexdata.com/v4/launches')
    // fetch('http://localhost:5001/missions')
      .then(response => response.json())
      .then(data => setMissions(data))
      .catch(error => console.error('Error fetching missions:', error));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Space Missions</h1>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {missions.map(mission => (
          <div key={mission.id} className="bg-gray-100 p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{mission.name}</h2>
            <p className="mt-2">{mission.details || 'No details available'}</p>
            <p className="mt-2 text-sm text-gray-500">Launch Date: {new Date(mission.date_utc).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Missions;
