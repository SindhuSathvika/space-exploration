import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-black bg-opacity-50 p-6">
        <h1 className="text-4xl font-bold text-center text-indigo-400">
          Welcome to Space Exploration
        </h1>
        <p className="mt-2 text-center text-lg text-gray-300">
          Discover the wonders of the universe, from space missions to celestial objects.
        </p>
      </header>

      <main className="p-6">
        <section className="my-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-indigo-800 bg-opacity-70 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-2">Planets</h2>
              <p className="text-gray-300">
                Explore the planets in our solar system and learn fascinating facts about them.
              </p>
              <button
                onClick={() => navigate('/explore')}
                className="mt-4 px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700"
              >
                Learn More
              </button>
            </div>
            <div className="bg-indigo-800 bg-opacity-70 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-2">Missions</h2>
              <p className="text-gray-300">
                Delve into historical and current space missions that have shaped our understanding of the cosmos.
              </p>
              <button
                onClick={() => navigate('/missions')}
                className="mt-4 px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700"
              >
                Learn More
              </button>
            </div>
            <div className="bg-indigo-800 bg-opacity-70 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-2">Stars & Galaxies</h2>
              <p className="text-gray-300">
                Uncover the secrets of distant stars and galaxies far, far away.
              </p>
              <button
                onClick={() => navigate('/explore')}
                className="mt-4 px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700"
              >
                Learn More
              </button>
            </div>
          </div>
        </section>

        <footer className="text-center mt-12">
          <p className="text-gray-400">
            Made with 🚀 by Space Enthusiasts.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Home;
