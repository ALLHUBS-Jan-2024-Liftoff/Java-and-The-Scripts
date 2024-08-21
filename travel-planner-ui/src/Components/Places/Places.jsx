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
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={query} onChange={handleChange} placeholder="Search for places" required />
            <button type="submit">Search</button>
        </form>
        <div>
            {results.length > 0 && (
                <ul>
                    {results.map((result, index) => (
                        <li key={index}>
                            <h3>{result.name}</h3>
                            <p>{result.formatted_address}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    </div>
    );
};

export default Places; 