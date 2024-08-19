import React, { useState } from 'react'; 
import UserSearch from '../UserSearch/UserSearch';
import UserProfile from '../UserProfile/UserProfile';
import UserTravelPlansList from '../UserTravelPlansList/UserTravelPlansList';

const User = () => {
    const [user, setUser] = useState(); 
    
    const handleUserFound = (userData) => {
        setUser(userData);
    };

    return (
        <div>
            <h1>User</h1>
            <UserSearch onUserFound={handleUserFound} />
            {user && (
                <div>
                    <UserProfile user={user} />
                    <UserTravelPlansList userId={user.id} />
                </div>
            )}
        </div>
    )
};

export default User; 