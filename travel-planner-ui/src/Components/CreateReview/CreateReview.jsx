import React, { useState } from 'react'; 
import axios from 'axios';

const CreateReview = () => {
    const [review, setReview] = useState({
        user: '',
        travelPlanId: '',
        rating: '',
        comment: ''
    });

    const handleChange = (e) => {
        setReview({
            ...review,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit =(e) => {
        e.preventDefault();
        axios.post('/api/reviews', review)
            .then(response => {
                console.log(response.data);
        })
        .catch(error => {
            console.error("There was an error creating the review. Please try again.", error);
        });
    };

return (
    <div>
        <h1>Create Review</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Travel Plan</label>
                <input type="text" name="travelPlanId" value={review.travelPlanId} onChange={handleChange} />
            </div>
            <div>
                <label>Rating</label>
                <input type="text" name="rating" value={review.rating} onChange={handleChange} />
            </div>
            <div>
                <label>Comment</label> 
                <textarea name="comment" value={review.comment} onChange={handleChange} />
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
    );

}; 

export default CreateReview; 