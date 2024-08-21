import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";


const Itinerary = () => {
    const navigate = useNavigate();
    const [activities, setActivities] = useState([]);
    const [travelPlans, setTravelPlans] = useState([]);
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
const handleDelete = async (id) => {
        const confirmed = window.confirm("Are you sure you want to delete this activity?")
        if (confirmed) {
            try {
                await axios.delete(`http://localhost:8080/api/activities/${id}`);
                setActivities(activities.filter(activity => activity.activityId !== id));
                alert("Activity deleted.")
                window.location.reload();
            } catch (error) {
                console.error("Error deleting activity", error)
                alert("Error deleting activity.");
            }
        }
    };

    const handleEdit = (id) => {
        navigate(`edit-activity/${id}`)
    };

return (
        <div>
            <p><strong>Activities</strong></p>
            {travelPlans.length > 0 ? (
                <ol>
                    {travelPlans.map(plan => (
                        <div key={plan.id}>
                            <h2>{plan.destination}</h2>
                            {plan.activities.length > 0 ? (
                                <ol>
                                    {plan.activities.map(item => (
                                        <li key={item.id}>
                                            <p><strong>Day:</strong> {item.day}</p>
                                            <p><strong>Description:</strong> {item.description}</p>
                                            <button type="button" class="btn btn-warning" onClick={() => handleEdit(item.activityId)}>Edit</button>
                                            <button type="button" class="btn btn-danger" onClick={() => handleDelete(item.activityId)}>Delete</button>
                                        </li>

                                    ))}
                                </ol>
                            ) : (
                                <p>No Activities Yet</p>
                            )}
                        </div>
                    ))}
                </ol>
            ) : (
                <p>No travel plans yet.</p>
            )}
            <button type="button" class="btn btn-primary" onClick={() => navigate('/travel-plans')}>Back to Travel Plans List</button>

        </div>
    )


};
 export default Itinerary;