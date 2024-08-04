import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios'; 
import { Link } from 'react-router-dom';

const TravelPlansList = () => {
    const [travelPlans, setTravelPlans] = useState([]); 


    useEffect(() => {
        axios.get('/api/travelplans')
            .then(response => {

                setTravelPlans(response.data);
            })
            .catch(error => {
                console.error('Error fetching travel plans:', error);
            });
}, []); 

return (
    <div>
        <h1>All Travel Plans</h1>
            <p>No travel plans available.</p>
    </div>
);

};

export default TravelPlansList; 