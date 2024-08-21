import React, { useState } from 'react'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const CreateReview = () => {
    const [review, setReview] = useState({
        rating: '',
        reviewDescription: '',
    });

    const navigate = useNavigate(); 

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
        }
    }

return (
    <Container className="px-3">
        <h1>Create Review</h1>
        <form onSubmit={handleSubmit} className="create-review-form">
            <label htmlFor="rating" className="form-label">Rating- Enter a number between 1 and 5 (1 being the worst, 5 the best).</label>
            <input type="number" className="form-control" name="rating" value={review.rating} onChange={handleChange} min="1" max="5"/>    
            <label htmlFor="reviewDescription" className="form-label">Review Description</label> 
            <input type="text" className="form-control" placeholder="Enter a comment" name="reviewDescription" value={review.reviewDescription} onChange={handleChange} />
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </Container>
)};

export default CreateReview; 