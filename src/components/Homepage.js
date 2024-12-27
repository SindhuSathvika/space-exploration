import React from 'react';

const Homepage = () => {
    return (
        <div className="bg-gradient-to-b from-black to-gray-900 text-white h-screen p-6">
            <header className="text-center">
                <h1 className="text-5xl font-bold">Space Exploration Knowledge Repository</h1>
                <p className="mt-4 text-xl">
                    Discover missions, celestial bodies, and cutting-edge technologies shaping our universe.
                </p>
            </header>
            <div className="mt-10 flex justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
                    Explore Missions
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Learn About Planets
                </button>
            </div>
        </div>
    );
};

export default Homepage;
