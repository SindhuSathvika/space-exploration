import React, { useEffect, useState } from 'react';
import axios from 'axios';

const APOD = () => {
    const [apod, setApod] = useState(null);

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=jlkqcraRyU40ztEPB7rEq5mDdUk8Ia3tQZh5GXOg`)
            .then(response => {
                console.log(response.data);  // Log the response to ensure correct data
                setApod(response.data);
            })
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    return (
        <div className="p-6 bg-gray-800 text-white">
            <h2 className="text-2xl font-bold">Astronomy Picture of the Day</h2>
            {apod ? (
                <div className="mt-4">
                    {apod.media_type === "image" ? (
                        <img 
                            src={apod.hdurl || apod.url}  // Check if hdurl exists, else use url
                            alt={apod.title} 
                            style={{ width: '100%', height: 'auto' }}
                            loading="lazy"
                            onError={() => console.log('Image failed to load')}  // Debug for image load issues
                        />
                    ) : (
                        <iframe
                            title="APOD Video"
                            src={apod.url}
                            className="w-full h-[500px]"
                             allowfullscreen="allowfullscreen"
                        ></iframe>
                    )}
                    <h3 className="mt-2 text-xl">{apod.title}</h3>
                    <p className="mt-2">{apod.explanation}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default APOD;
