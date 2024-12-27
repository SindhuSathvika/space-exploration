
const Gallery = () => {
    const images = [
        { src: "https://science.nasa.gov/wp-content/uploads/2024/03/mars-full-globe-16x9-1.jpg?w=2560&format=webp", alt: "Image of Mars", title: "Mars" },
        { src: "https://science.nasa.gov/wp-content/uploads/2024/03/blue-marble-apollo-17-16x9-1.jpg?w=2560&format=webp", alt: "Image of Earth from Space", title: "Earth" },
        { src: "https://www.nasa.gov/wp-content/uploads/2023/03/as11-44-6667.jpg?w=1041", alt: "Image of the Moon", title: "The Moon" },
        { src: "https://media.istockphoto.com/id/1693812103/photo/astronaut-in-tethered-spacewalk-over-earth.jpg?s=612x612&w=0&k=20&c=jBqky1yzNzdTjL9N8KnkK3f8ymG-iNdHkqGmvMyQG-w=", alt: "Astronaut in space", title: "Astronauts" },
    ];

    return (
        <div className="bg-gray-800 text-white p-6">
            <h2 className="text-3xl font-bold">Space Exploration Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {images.map((image, index) => (
                    <div key={index} className="bg-gray-900 p-4 rounded-lg">
                        <img src={image.src} alt={image.alt} className="w-full h-64 object-cover rounded-md" />
                        <h3 className="mt-2 text-xl">{image.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
