import React, { useEffect, useState} from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';

const ReviewList = () => {
    const [reviews, setReviews] = useState([]);
    const navigate = useNavigate(); 

    useEffect(() => { 
        axios.get('http://localhost:8080/api/reviews')
            .then(response => {
                setReviews(response.data)
            })
            .catch(error => {
                console.error('Error fetching reviews', error);
    
            }); 

}, []); 

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/reviews/${id}`);
            setReviews(reviews.filter(review => review.id !== id));
        } catch (error) {
            console.error("Error deleting review", error)
            alert("Error deleting review.");
        }
    }; 

    const handleEdit = (id) => {
        navigate(`edit-review/${id}`)
    }; 

return (
    <div>
        <h1>All Reviews</h1>
        {reviews.length === 0 ? (
                <p>No reviews yet.</p>
        ) : ( 
            <ul>
                {reviews.map(review => (
                    <li key={review.id}>
                        <p>{review.comment}</p>
                        <p>{review.rating}</p>
                        <button onClick={() => handleEdit(review.id)}>Edit</button>
                        <button onClick={() => handleDelete(review.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        )}
    </div>
    );
}; 

export default ReviewList;