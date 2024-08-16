import React, { useEffect, useState} from 'react';
import axios from 'axios'; 

const ReviewList = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => { 
        axios.get('http://localhost:8080/api/reviews')
            .then(response => {
                setReviews(response.data)
            })
            .catch(error => {
                console.error('Error fetching reviews', error);
    
            }); 

}, []); 

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
                    </li>
                ))}
            </ul>
        )}
    </div>
    );
}; 

export default ReviewList;