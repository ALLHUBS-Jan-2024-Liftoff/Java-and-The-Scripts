import React from 'react';

const UserProfile = ({ user }) => {
    if (!user) {
        return <div>No user found.</div>
    }

    return (
        <div>
            <h2>{user.firstName} {user.lastName}</h2> 
            <p>Email: {user.email}</p> 
        </div>
    );

};

export default UserProfile;