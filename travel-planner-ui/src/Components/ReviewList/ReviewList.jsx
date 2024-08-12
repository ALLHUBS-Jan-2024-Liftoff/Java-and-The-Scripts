import React, { useEffect, useState} from 'react';
import axios from 'axios'; 

const ReviewList = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => { 
        axios.get('/api/reviews')
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
        {/* {reviews.length === 0 ? ( 
            <p>No reviews yet.</p>
        ) : (
        <ul>
            {reviews.map(review => (
                <li key={review.id} className="review-item">
                    <p>{review.rating}</p>
                    <p>{review.description}</p>
                    <Link to={`/reviews/${review.id}`}>View Details</Link>
                </li> 
                ))}
        </ul>
        )} */}
    </div>
);
}; 

export default ReviewList;