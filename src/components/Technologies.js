
const Technologies = () => {
    const technologies = [
        { name: "SpaceX's Falcon 9", description: "A reusable rocket designed to lower the cost of space travel." },
        { name: "James Webb Space Telescope", description: "The most powerful space telescope launched to study deep space." },
        { name: "Mars Rovers", description: "Autonomous vehicles exploring the surface of Mars to gather data." },
        { name: "SpaceX Starship", description: "A spacecraft designed for deep space exploration and Mars colonization." },
        { name: "Artemis Program", description: "NASA's program aimed at landing the first woman and the next man on the Moon." },
    ];

    return (
        <div className="bg-gray-900 text-white p-6">
            <h2 className="text-3xl font-bold">Technologies & Innovations</h2>
            <ul className="mt-4 space-y-4">
                {technologies.map((tech, index) => (
                    <li key={index} className="border-b border-gray-700 py-3">
                        <h3 className="text-xl font-semibold">{tech.name}</h3>
                        <p>{tech.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Technologies;

