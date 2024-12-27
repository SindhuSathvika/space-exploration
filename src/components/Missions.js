const Missions = () => {
    const missions = [
        { name: "Apollo 11", year: "1969", description: "The first successful manned mission to the moon." },
        { name: "Voyager 1", year: "1977", description: "NASA's spacecraft exploring the outer reaches of the solar system." },
        { name: "Curiosity Rover", year: "2012", description: "A rover that explores Mars and sends data back to Earth." },
    ];

    return (
        <div className="p-6 bg-gray-900 text-white">
            <h2 className="text-3xl font-bold">Space Missions & Discoveries</h2>
            <ul className="mt-4 space-y-4">
                {missions.map((mission, index) => (
                    <li key={index} className="border-b border-gray-700 py-3">
                        <h3 className="text-xl font-semibold">{mission.name} ({mission.year})</h3>
                        <p>{mission.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Missions;
