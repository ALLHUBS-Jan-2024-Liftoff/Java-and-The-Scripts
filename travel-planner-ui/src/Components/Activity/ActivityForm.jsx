import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './ActivityForm.css';
import {useNavigate, useParams} from "react-router-dom";

const ActivityForm = () => {
    const { id } = useParams();
    const [travelPlan, setTravelPlan] = useState({});
    const [loadingTravelPlan, setLoadingTravelPlan] = useState(true);
    const [activity, setActivity] = useState({
        day: '',
        description: '',
        travelPlan: null,
    });
    const navigate = useNavigate();

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
                setLoadingTravelPlan(false);
            })
    }, [id]);

    useEffect(() => {
        if(!loadingTravelPlan) {
            activity.travelPlan = travelPlan;
            console.log(activity);
        }
    }, [travelPlan,loadingTravelPlan]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setActivity({
            ...activity,
            [name]: value
        });
        console.log('on Change: ', activity);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/api/activities/new', activity, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            alert("Activity created successfully.");
            // Reset form after successful submission
            setActivity({
                day: '',
                description: '',
                travelPlan: null
            });
            navigate('/travel-plans');
        } catch (error) {
            console.error('There was an error creating the activity!', error);
            alert("There was an error creating the activity.");
        }
    };

    return (
        <div class="mb-3">
            <h1>Create Activity</h1>
            <form onSubmit={handleSubmit} className="activity-form">
                <label htmlFor="day" class="form-label">Day: </label>
                <input type="text" class="form-control" id="day" name="day" value={activity.day} onChange={handleChange} required />
                <label htmlFor="description" class="form-label">Description: </label>
                <input type="textarea" class="form-control" name="description" value={activity.description} onChange={handleChange} required />
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default ActivityForm;
