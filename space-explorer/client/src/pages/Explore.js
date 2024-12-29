
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
    <div className="p-4">
      <h1 className="text-3xl font-bold">Explore the Universe</h1>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {planets.map(planet => (
          <div key={planet.id} className="bg-blue-100 p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{planet.englishName}</h2>
            <p className="mt-2">Gravity: {planet.gravity} m/s²</p>
            <p className="mt-2">Mass: {planet.mass?.massValue} × 10<sup>{planet.mass?.massExponent}</sup> kg</p>
            <p className="mt-2">Mean Radius: {planet.meanRadius} km</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
