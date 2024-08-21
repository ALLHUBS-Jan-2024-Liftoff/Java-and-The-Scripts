import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditReview = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [activity, setActivity] = useState({
        day: '',
        description: '',
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
       fetch(`http://localhost:8080/api/activities/${id}`)
            .then(response => {
                if(!response.ok) {
                    throw new Error("Error with API")
                }
                return response.json()
            })
            .then(data => {
                console.log(data)
                setActivity(data);
            })
            .catch(error => {
                console.log("Error fetching activity.", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    if(loading) {
        return <div>Loading...</div>
    }

    const handleChange = (e) => {
        const {name, value } = e.target;
        setActivity({
            ...activity,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8080/api/activities/${id}`, activity)
            navigate('/itinerary');
        } catch (error) {
            console.error("Error updating itinerary", error);
        }
    };


    return (
    <div class="mb-3">
        <h1>Edit Activity</h1>
        <form onSubmit={handleSubmit} className="edit-review-form">
            <label htmlFor="day" class="form-label">Day- Enter a number value for the day of the activity</label>
            <input type="number" class="form-control" name="day" value={activity.day} onChange={handleChange} min="1" max="30"/>
            <label htmlFor="description" class="form-label">Activity Description</label>
            <input type="text" class="form-control" name="description" value={activity.description} onChange={handleChange} />
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <button type="button" class="btn btn-secondary" onClick={() => navigate('/itinerary')}>Back</button>
    </div>
    );
};

export default EditReview;