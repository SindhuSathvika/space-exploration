import React, { useEffect, useState } from 'react';

const Explore = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    // Fetch data from NASA API or other sources
    fetch('https://api.le-systeme-solaire.net/rest/bodies/')
      .then(response => response.json())
      .then(data => {
        const filteredPlanets = data.bodies.filter(body => body.isPlanet);
        setPlanets(filteredPlanets);
      })
      .catch(error => console.error('Error fetching planets:', error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <header className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-indigo-400">
          Explore the Universe
        </h1>
        <p className="mt-2 text-center text-lg text-gray-300">
          Dive into the wonders of our solar system and learn about the planets.
        </p>
      </header>

      <main className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {planets.map((planet, index) => (
            <div
              key={index}
              className="bg-indigo-800 bg-opacity-70 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-bold text-indigo-300">
                {planet.englishName}
              </h2>
              <p className="mt-2 text-gray-300">
                <strong>Gravity:</strong> {planet.gravity} m/s²
              </p>
              <p className="mt-2 text-gray-300">
                <strong>Mass:</strong>{' '}
                {planet.mass?.massValue} × 10<sup>{planet.mass?.massExponent}</sup>{' '}
                kg
              </p>
              <p className="mt-2 text-gray-300">
                <strong>Mean Radius:</strong> {planet.meanRadius} km
              </p>
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

export default Explore;
