import "./Itinerary.css"
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Heart from "react-animated-heart";


const LOCAL_STORAGE_KEY = 'likedItems';

const Itinerary = () => {
    const navigate = useNavigate();
    const [activities, setActivities] = useState([]);
    const [travelPlans, setTravelPlans] = useState([]);
    const [loading, setLoading] = useState(true);

    const getInitialLikedItems = () => {
        try {
            const savedLikedItems = localStorage.getItem(LOCAL_STORAGE_KEY);
            return savedLikedItems ? JSON.parse(savedLikedItems) : {};
        } catch (error) {
            console.error(`Failed to parse liked items from local storage`,error);
            return {};
        }
    };

    const [likedItems, setLikedItems] = useState(getInitialLikedItems);

    useEffect(() => {
        fetch('http://localhost:8080/api/travelplans/', {credentials: "include"})
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

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(likedItems))
    },[likedItems]);

    if(loading) {
        return <div>Loading...</div>
    }

    const handleDelete = async (id) => {
        const confirmed = window.confirm("Are you sure you want to delete this activity?")
        if (confirmed) {
            try {
                await axios.delete(`http://localhost:8080/api/activities/${id}`, {withCredentials: true});
                setActivities(activities.filter(activity => activity.activityId !== id));
                alert("Activity deleted.")
                window.location.reload();
            } catch (error) {
                console.error("Error deleting activity", error)
                alert("Error deleting activity.");
            }
        }
    };

    const handleLikeToggle = (id) => {
        setLikedItems((prevState => ({
            ...prevState,
            [id]: !prevState[id]
        })));
    };

    const handleEdit = (id) => {
        navigate(`edit-activity/${id}`)
    };

    return (
            <div>
                <p><strong>Activities</strong></p>
                {travelPlans.length > 0 ? (
                    <ol>
                        {travelPlans.map((plan, index) => {
                            const sortedActivities = [...plan.activities].sort((a, b) => a.day - b.day);
                            return (
                                <div key={index} className={`bodyDiv`}>
                                    <h2>{plan.destination}</h2>
                                    {sortedActivities.length > 0 ? (
                                        <ol>
                                            {sortedActivities.map(item => (
                                                <li key={item.activityId}>
                                                    <p><strong>Day:</strong> {item.day}</p>
                                                    <p><strong>Description:</strong> {item.description}</p>
                                                    <button type="button" className="btn btn-warning"
                                                            onClick={() => handleEdit(item.activityId)}>Edit
                                                    </button>
                                                    <button type="button" className="btn btn-danger"
                                                            onClick={() => handleDelete(item.activityId)}>Delete
                                                    </button>
                                                    <Heart className={`heart-icon`}
                                                           isClick={likedItems[item.activityId] || false}
                                                           onClick={() => handleLikeToggle(item.activityId)}/>
                                                </li>
                                            ))}
                                        </ol>
                                    ) : (
                                        <p>No Activities Yet</p>
                                    )}
                                </div>
                            );
                        })}
                    </ol>
                ) : (
                    <p>No travel plans yet.</p>
                )}
                <button type="button" className="btn btn-primary" onClick={() => navigate('/travel-plans')}>Back to
                    Travel Plans
                    List
                </button>
    </div>
)


};
export default Itinerary;