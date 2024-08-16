import React from 'react';

const UserProfile = ({ user }) => {
    if (!user) {
        return <div>No user found.</div>;
    }
    
    return (
        <div>
            <h2>User Profile</h2>
            <p>First Name: {user.firstName}</p> 
            <p>Last Name: {user.lastName}</p>
            <p>Email: {user.email}</p> 
        </div>
    );
};

export default UserProfile;