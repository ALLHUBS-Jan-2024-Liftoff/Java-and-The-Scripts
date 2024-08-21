import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { useParams, useNavigate } from 'react-router-dom'; 

const EditReview = () => { 
    const { id } = useParams();
    const navigate = useNavigate(); 
    const [review, setReview] = useState({
        rating: '',
        reviewDescription: '',
        activity: ''
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
       fetch(`http://localhost:8080/api/reviews/${id}`)
            .then(response => {
                if(!response.ok) {
                    throw new Error("Error with API")
                }
                return response.json()
            })
            .then(data => {
                console.log(data)
                setReview(data); 
            })
            .catch(error => {
                console.log("Error fetching review.", error);
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
        setReview({
            ...review,
            [name]: value, 
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        try { 
            await axios.put(`http://localhost:8080/api/reviews/${id}`, review)
            navigate('/reviews');
        } catch (error) { 
            console.error("Error updating review", error);
        }
    };

    return (
    <div class="mb-3">
        <h1>Edit Review</h1>
        <form onSubmit={handleSubmit} className="edit-review-form">
            <h5>{review.activity.description}</h5>
            <label htmlFor="rating" class="form-label">Rating- Enter a number between 1 and 5 (1 being the worst, 5 the best).</label>
            <input type="number" class="form-control" name="rating" value={review.rating} onChange={handleChange} min="1" max="5"/>    
            <label htmlFor="description" class="form-label">Review Description</label> 
            <input type="text" class="form-control" name="reviewDescription" value={review.reviewDescription} onChange={handleChange} />
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <button type="button" class="btn btn-secondary" onClick={() => navigate('/reviews')}>Back</button>
    </div>
    );
};

export default EditReview; 