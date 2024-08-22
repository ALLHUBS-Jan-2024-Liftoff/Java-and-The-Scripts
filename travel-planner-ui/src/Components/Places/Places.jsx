import React, { useState } from 'react';


const Places =() => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]); 


    const handleChange = (e) => {
        setQuery(e.target.value);

    };

    const handleSubmit = async (e) => {
      e.preventDefault();
        if (!query) return;

        try {
            const response = await fetch(`http://localhost:8080/api/places?query=${encodeURIComponent(query)}`);
            const data = await response.json();
            console.log(data.results);
            setResults(data.results); 
        } catch (error) {
            console.error("Error fetching places.", error);
        } 
    };

return (
    <div class="mb-3">
        <form onSubmit={handleSubmit}>
            <input type="text" value={query} onChange={handleChange} placeholder="Search for places" required />
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <div class="mb-3">
            {results.length > 0 ? (
                <ul>
                    {results.map((place, index) => (
                        <li key={index}>
                            <h3>{place.name}</h3>
                            <p>{place.formatted_address}</p>
                            <p>Rating : {place.rating || 'No rating'}</p>
                            <p>Price Level: {place.price_level !== undefined ? `$${place.price_level}` : 'Not available'}</p>
                            <p>Opening Hours: {place.opening_hours?.open_now ? 'Open now' : 'Closed'}</p>
                        </li>
                    ))}
                </ul>
            ) : ( 
                <p>No results found.</p>  
            )}
        </div>
    </div>
    );
};

export default Places; 