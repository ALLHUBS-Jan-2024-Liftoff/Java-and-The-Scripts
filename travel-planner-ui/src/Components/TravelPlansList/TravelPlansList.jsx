import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';

const TravelPlansList = () => {
    const [travelPlans, setTravelPlans] = useState([]);
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

useEffect(() => {
        fetch('http://localhost:8080/api/travelplans/')
            .then(response => {
                if(!response.ok) {
                    throw new Error("Response from API Error")
                }
                return response.json()
            })
            .then(data => {
                setTravelPlans(data);
            })
            .catch(error => {
                console.error('Error fetching travel plans:', error);
            })
            .finally(() => {
                setLoading(false);
            })
    }, []);

    if(loading) {
        return <div>Loading...</div>
    }
const handleAddActivity = (id) => {
        navigate(`/add-activity/${id}`);
    };

    const handleView = (id) => {
        navigate(`/travel-plan-view/${id}`)
    };

    const handleEdit = (id) => {
        navigate(`/edit-travel-plan/${id}`);
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/api/travelplans/${id}`)
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
                {travelPlans.length > 0 ? (
                    <ul>
                        {travelPlans.map(plan => (
                        <li key={plan.id}>
                            <h3>{plan.destination}</h3>
                            <p>{plan.description}</p>
                            <button onClick={() => handleView(plan.id)}>View</button>
                            <button onClick={() => handleEdit(plan.id)}>Edit</button>
                            <button onClick={() => handleDelete(plan.id)}>Delete</button>
                            <button onClick={() => handleAddActivity(plan.id)}>Add Activity</button>
                        </li>
                    ))}
                    </ul>
                ) : (
                    <p>No travel plans yet.</p> 
                )}
        </div> 
    );
};

export default TravelPlansList;
