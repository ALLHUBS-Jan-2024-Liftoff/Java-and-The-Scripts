import React, { useState } from 'react'; 
import UserSearch from '../UserSearch/UserSearch';
import UserProfile from '../UserProfile/UserProfile';

const User = () => {
    const [user, setUser] = useState(); 
    
    const handleUserFound = (userData) => {
        setUser(userData);
    };

    return (
        <div>
        <h1>User</h1>
        <UserSearch onUserFound={handleUserFound} />
        {user && <UserProfile user={user} />} 
        </div>
    )
};

export default User; 