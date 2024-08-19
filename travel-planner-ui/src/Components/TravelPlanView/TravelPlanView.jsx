import React, {useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const TravelPlanView = () => {
    const { id } = useParams();
    const [travelPlan, setTravelPlan] = useState({}); 
    const navigate = useNavigate(); 

    useEffect(() => {
        axios.get(`http://localhost:8080/api/travelplans/${id}`)
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
        <p><strong>Start Date: </strong>{travelPlan.startDate}</p>
        <p><strong>End Date: </strong>{travelPlan.endDate}</p>
        <p><strong>Description: </strong>{travelPlan.description}</p>
        <p><strong>Activities</strong></p>
        <button type="button" class="btn btn-primary" onClick={() => navigate('/travel-plans')}>Back to Travel Plans List</button>
        </div>
    );
};

export default TravelPlanView; 

