import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { useParams, useNavigate } from 'react-router-dom'; 

const EditReview = () => { 
    const { id } = useParams();
    const navigate = useNavigate(); 
    const [review, setReview] = useState({
        rating: '',
        comment: '',
    });

    useEffect(() => {
        axios.get(`http://localhost:8080/api/reviews/${id}`)
            .then(response => {
                setReview(response.data); 
            })
            .catch(error => {
                console.log("Error fetching review.", error);
            }); 
    }, [id]); 


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
        <div>
        <h1>Edit Review</h1>
        <form onSubmit={handleSubmit} className="create-review-form">
            <div>
                <p>Enter a number between 1 and 5 (1 being the worst, 5 the best).</p>
                <label>Rating</label>
                <input type="number" name="rating" value={review.rating} onChange={handleChange} min="1" max="5"/>    
            </div>
            <div>
                <label>Comment</label> 
                <textarea name="comment" value={review.comment} onChange={handleChange} />
            </div>
            <button type="submit">Save</button>
        </form>
    </div>
    );
};

export default EditReview; 