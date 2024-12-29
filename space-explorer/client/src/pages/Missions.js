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
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <header className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-indigo-400">
          Space Missions
        </h1>
        <p className="mt-2 text-center text-lg text-gray-300">
          Explore past and upcoming space missions from around the globe.
        </p>
      </header>

      <main className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {missions.map(mission => (
            <div
              key={mission.id}
              className="bg-indigo-800 bg-opacity-70 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-bold text-indigo-300">
                {mission.name}
              </h2>
              <p className="mt-2 text-gray-300">
                {mission.details || 'No details available'}
              </p>
              <p className="mt-2 text-sm text-gray-400">
                Launch Date: {new Date(mission.date_utc).toLocaleDateString()}
              </p>
              <button
                onClick={() => window.open(mission.links.webcast, '_blank')}
                className="mt-4 px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700"
              >
                Watch Launch
              </button>
            </div>
          ))}
        </div>
      </main>

      <footer className="text-center mt-12">
        <p className="text-gray-400">
          Made with 🚀 by Space Enthusiasts.
        </p>
      </footer>
    </div>
  );
};

export default Missions;
