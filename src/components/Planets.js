
const Planets = () => {
    const planets = [
        { name: "Mercury", description: "The closest planet to the Sun, known for its extreme temperature changes." },
        { name: "Venus", description: "Venus is the hottest planet in our solar system, often called Earth's twin." },
        { name: "Earth", description: "The only known planet to support life, with water, atmosphere, and life forms." },
        { name: "Mars", description: "Mars is often called the Red Planet, known for its reddish appearance." },
        { name: "Jupiter", description: "The largest planet in our solar system, known for its massive storms like the Great Red Spot." },
        { name: "Saturn", description: "Saturn is famous for its beautiful and expansive rings." },
        { name: "Uranus", description: "Uranus is a giant ice planet, with a unique sideways rotation." },
        { name: "Neptune", description: "Neptune is known for its intense blue color, caused by methane in its atmosphere." },
    ];

    return (
        <div className="bg-gray-800 text-white p-6">
            <h2 className="text-3xl font-bold">Planets & Celestial Bodies</h2>
            <ul className="mt-4 space-y-4">
                {planets.map((planet, index) => (
                    <li key={index} className="border-b border-gray-700 py-3">
                        <h3 className="text-xl font-semibold">{planet.name}</h3>
                        <p>{planet.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Planets;
