import React, { useState } from 'react';
import axios from 'axios'; 

const Places =() => {
    const [query, setQuery] = useState();
    const [type, setType] = useState('restaurant');
    const [location, setLocation] = useState('');
    const [results, setResults] = useState(); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); 

    const handleSearch = async () => {
        setLoading(true);
        setError(null); 

        try {
            const response = await axios.get("http://localhost:8080/api/places", {
                params: { query, type, location }
            }); 
            console.log(response.data.results);
            setResults(response.data.results);
        } catch (err) {
            setError("Error fetching places.");
        } finally {
        setLoading(false);
        }
    };

    return (
        <div>
            <h2>Search Places</h2>
            <input type="text" placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)} />
            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="restaurant">Restaurants</option>
                <option value="hotel">Hotel</option>
                <option value="tourist_attraction">Activities</option>
            </select>
            <input type="text" placeholder="Enter Address or Zip Code" value={location} onChange={(e) => setLocation(e.target.value)} />
            <button onClick={handleSearch}>Search</button>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {results && (
                <ul>
                    {results.map((place) => (
                        <li key={place.place_id}>
                            <h3>{place.name}</h3>
                            <p>{place.formatted_address}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Places; 