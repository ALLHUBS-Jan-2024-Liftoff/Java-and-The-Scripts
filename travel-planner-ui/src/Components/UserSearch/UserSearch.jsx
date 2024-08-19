import React, { useState } from 'react';
import axios from 'axios';

const UserSearch = ({ onUserFound }) => {
    const [email, setEmail] = useState(); 

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/users/search?email=${email}`)
            onUserFound(response.data);
        } catch (error) {
            console.error("Error finding user.", error)
            alert("User not found.")
        } 
    };

    return (
        <div>
            <input type="email"placeholder="Enter user's email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type="button" class="btn btn-primary" onClick={handleSearch}>Search</button>
        </div> 
    );

};

export default UserSearch; 