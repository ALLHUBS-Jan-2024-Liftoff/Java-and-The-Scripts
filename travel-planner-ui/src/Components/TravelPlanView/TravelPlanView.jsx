import React, {useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const TravelPlanView = () => {
    const { id } = useParams();
    const [travelPlan, setTravelPlan] = useState(null); 
    const navigate = useNavigate; 

    useEffect(() => {
        axios.get(`api/travelplans/${id}`)
            .then(response => {
                setTravelPlan(response.data);
            })
            .catch(error => {
                console.error("Error grabbing travel plan details.", error)
            });
    }, [id]);

return (
    <div>
        <h1>Travel Plan Details</h1>
        <p>{travelPlan.destination}</p>
        <p>Start Date: {travelPlan.startDate}</p>
        <p>End Date: {travelPlan.endDate}</p>
        <p>Description: {travelPlan.description}</p>
        <p>Activities</p>
        <button onClick={() => navigate('/travel-plans')}>Back to Travel Plans List</button>
        </div>
    );
};

export default TravelPlanView; 

