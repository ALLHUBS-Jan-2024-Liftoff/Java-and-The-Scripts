import React from 'react';

const UserProfile = ({ user }) => {
    if (!user) {
        return <div>No user found.</div>;
    }
    
    return (
        <div>
            <h2>User Profile</h2>
            <p><strong>First Name: </strong>{user.firstName}</p> 
            <p><strong>Last Name: </strong>{user.lastName}</p>
            <p><strong>Email: </strong>{user.email}</p> 
        </div>
    );
};

export default UserProfile;