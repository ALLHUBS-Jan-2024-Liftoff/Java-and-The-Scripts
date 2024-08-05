import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import { Link, useNavigate } from 'react-router-dom';

const TravelPlansList = () => {
    const [travelPlans, setTravelPlans] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/api/travelplans')
            .then(response => {
                console.log(response.data); // Check this to ensure it's an array
                setTravelPlans(response.data);
            })
            .catch(error => {
                console.error('Error fetching travel plans:', error);
            });
    }, []);

    const handleEdit = (id) => {
        navigate(`/edit-travel-plan/${id}`);
    };

    const handleDelete = (id) => {
        axios.delete(`/api/travelplans/${id}`)
            .then(() => {
                // Remove the deleted travel plan from the state
                setTravelPlans(travelPlans.filter(plan => plan.id !== id));
                alert('Travel plan deleted successfully.');
            })
            .catch(error => {
                console.error('Error deleting travel plan:', error);
                alert('There was an issue deleting the travel plan.');
            });
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
