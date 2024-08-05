import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios'; 
import { Link, useNavigate } from 'react-router-dom';
import { dataForTravelPlans } from '../../TestingData/TestingData';

const TravelPlansList = () => {
    const [travelPlans, setTravelPlans] = useState([]); 
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/api/travelplans')
            .then(response => {

                setTravelPlans(response.data);
            })
            .catch(error => {
                console.error('Error fetching travel plans:', error);
            });
}, []); 

const handleEdit = (id) => {
    navigate(`/edit-travel-plan/${id}`);
};

return (
    <div>
        <h1>All Travel Plans</h1>
        <ol>
            {travelPlans.map(plan => (
                <li key={plan.id}>
                    <Link to={`/travel-plans/${plan.id}`}>{plan.destination}</Link>
                    <button onClick={() => handleEdit(plan.id)}>Edit</button>
                    <button onClick={() => handleDelete(plan.id)}>Delete</button>
                </li>
            ))}
        </ol>
    </div>
);

};

export default TravelPlansList; 