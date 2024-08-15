import React, { useState } from 'react'; 
import UserSearch from '../UserSearch/UserSearch';
import UserProfile from '../UserProfile/UserProfile';

const User = () => {
    const [selectedUser, setSelectedUser] = useState(); 
    
    const handleUserFound = (userData) => {
        setSelectedUser(userData);
    };

    return (
        <div>
        <h1>User</h1>
        <UserSearch onUserFound={handleUserFound} />
        <UserProfile user={selectedUser} /> 
        </div>
    )
};

export default User; 