import React, {useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';


const TravelPlanView = () => {
    const { id } = useParams();
    const [travelPlan, setTravelPlan] = useState({}); 
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:8080/api/travelplans/${id}`)
            .then(response => {
                if(!response.ok) {
                    throw new Error("Response from API Error")
                    }
                return response.json()
                })
            .then(data => {
                setTravelPlan(data);
            })
            .catch(error => {
                console.error("Error grabbing travel plan details.", error)
            })
            .finally(() => {
                setLoading(false);
            })
    },      [id]);

    if(loading) {
         return <div>Loading...</div>
    }

return (
    <div>
        <h1>Travel Plan Details</h1>
        <p><strong>Travel Plan Destination</strong> {travelPlan.destination}</p>
        <p><strong>Start Date: </strong>{travelPlan.startDate}</p>
        <p><strong>End Date:</strong> {travelPlan.endDate}</p>
        <p><strong>Description:</strong> {travelPlan.description}</p>
        <h5><u>Activities:</u></h5>
        {travelPlan.activities.length > 0 ? (
            <ol>
                {travelPlan.activities.map(activity => (
                    <li key={activity.activityId}>
                        <p><strong>Activity Description:</strong> {activity.description}</p>
                        <p><strong>Activity Day:</strong> {activity.day}</p>
                        <button onClick={() => handleView(activity.activityId)}>View</button>
                        <button onClick={() => handleEdit(activity.activityId)}>Edit</button>
                        <button onClick={() => handleDelete(activity.activityId)}>Delete</button>
                    </li>
                ))}
                </ol>
                ) : (
                    <p>No Activities yet.</p>
                )}
                <button onClick={() => navigate('/travel-plans')}>Back to Travel Plans List</button>
        </div>
    );
};

export default TravelPlanView; 

