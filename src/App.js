import React, { useState } from 'react';
import Planets from './components/Planets';
import Missions from './components/Missions';
import Technologies from './components/Technologies';
import Gallery from './components/Gallery';
import './App.css'; // Import the CSS file

const App = () => {
    const [activeSection, setActiveSection] = useState('home'); // Default section

    return (
        <div className="App">
            <header className="bg-gray-900 text-white p-4">
                <h1 className="text-3xl">Space Exploration Knowledge Hub</h1>
                <div className="flex space-x-4 mt-4">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => setActiveSection('planets')}
                    >
                        Learn About Planets
                    </button>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => setActiveSection('missions')}
                    >
                        Explore Missions
                    </button>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => setActiveSection('technologies')}
                    >
                        Technologies & Innovations
                    </button>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => setActiveSection('gallery')}
                    >
                        Space Gallery
                    </button>
                </div>
            </header>

            <main className="p-6">
                <div className={`section ${activeSection === 'planets' ? 'section-active' : ''}`}>
                    {activeSection === 'planets' && <Planets />}
                </div>
                <div className={`section ${activeSection === 'missions' ? 'section-active' : ''}`}>
                    {activeSection === 'missions' && <Missions />}
                </div>
                <div className={`section ${activeSection === 'technologies' ? 'section-active' : ''}`}>
                    {activeSection === 'technologies' && <Technologies />}
                </div>
                <div className={`section ${activeSection === 'gallery' ? 'section-active' : ''}`}>
                    {activeSection === 'gallery' && <Gallery />}
                </div>
            </main>
        </div>
    );
};

export default App;
