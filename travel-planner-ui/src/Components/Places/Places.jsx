import React, { useState } from 'react';
import axios from 'axios'; 

const PlacesSearch =() => {
    const [places, setPlaces] = useState([]);
    const [location, setLocation] = useState();
    const [radius, setRadius] = useState(); 

    const searchPlaces = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/places", {
                params: {
                    location: location,
                    radius: radius
                }
            });
            setPlaces(response.data.results);
        } catch (error) {
            console.error("Error fetching places.", error);
        }
    };

    return (
        <div>



        </div>





);

};

export default Places; 