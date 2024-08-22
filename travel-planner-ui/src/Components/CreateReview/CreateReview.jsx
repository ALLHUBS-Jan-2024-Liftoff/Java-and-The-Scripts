import React, { useState, useEffect } from 'react'; 
import axios from 'axios';

const CreateReview = () => {
    const [review, setReview] = useState({
        activity: null,
        rating: '',
        reviewDescription: ''
    });

    const [activities, setActivities] = useState([]); 

    useEffect(() => {
        const fetchActivities = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/activities')
                setActivities(response.data); 

            } catch (error) {
                console.error("There was an error fetching the activities.", error)
            }
        };
        fetchActivities();
    }, []); 


    const handleActivityChange = (e) => {
        const selectedId = parseInt(e.target.value);

        fetch(`http://localhost:8080/api/activities/${selectedId}`)
            .then(response => {
                if (!response.ok) { 
                    throw new Error("Response from API Error")
                }
                return response.json()
            })
            .then(data =>{
                review.activity = data;
            })
            .catch(error => {
                console.error("Error fetching activity with ID:", selectedId, error);
            })
    };


    const handleChange = (e) => {
        const { name, value } = e.target; 
        setReview({...review, [name]: value })
    };

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/api/reviews/new', review, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            alert("Review created.")
        } catch(error) {
            console.error("There was an error creating the review. Please try again.", error);
            alert("There was an issue creating the review.")
        };
    };

return (
    <div class="mb-3">
        <h1>Create Review</h1>
        <form onSubmit={handleSubmit} className="create-review-form">
            <label htmlFor="activity" class="form-label">Select Activity</label>
            <select name="activity" class="form-select" value={review.activityId} onChange={handleActivityChange}>
                <option value="">Select an Activity</option>
                 {activities.map(activity => (
                    <option key={activity.activityId} value={activity.activityId}>{activity.description}</option>
                ))}
            </select>
            <label htmlFor="rating" class="form-label">Rating- Enter a number between 1 and 5 (1 being the worst, 5 the best).</label>
            <input type="number" class="form-control" name="rating" value={review.rating} onChange={handleChange} min="1" max="5"/>    
            <label htmlFor="reviewDescription" class="form-label">Review Description</label> 
            <input type="text" class="form-control" placeholder="Enter a comment" name="reviewDescription" value={review.reviewDescription} onChange={handleChange} />
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
)};

export default CreateReview; 