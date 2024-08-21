import React, { useEffect, useState } from 'react';
import axios from 'axios'; 

const UserTravelPlansList = ({ userId }) => {
    const [travelPlans, setTravelPlans] = useState([]);

    useEffect(() => {
        if (userId) {
            axios.get(`http://localhost:8080/api/travelplans/user/${userId}`)
                .then(response => {
                    console.log(response.data);
                    setTravelPlans(response.data);
                })
                .catch(error => {
                    console.error("Error grabbing travel plans", error);
                    alert("Failed to grab travel plans for user. Try again later.");
                });
        }
    }, [userId]); 

    return (
        <div>
            <h1>User's Travel Plans</h1>
                {travelPlans.length > 0 ? (
                    <ol>
                        {travelPlans.map(plan => (
                        <li key={plan.id}>
                            <h3>{plan.destination}</h3>
                            <p>{plan.description}</p>
                        </li>
                    ))}
                    </ol>
                ) : (
                    <p>No travel plans yet.</p> 
                )}
        </div> 
    )
}; 

export default UserTravelPlansList; 




