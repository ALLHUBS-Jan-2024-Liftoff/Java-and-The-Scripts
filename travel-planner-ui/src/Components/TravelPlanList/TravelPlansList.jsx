import React, { useEffect, useState } from 'react';
import axios from 'axios'; 

const TravelPlanList = () => {
    const [travelPlans, setTravelPlans] = useState([]); 


    useEffect(() => {
        axios.get('/api/travelplans')
            .then(response => {

                setTravelPlans(response.data);

            }); 
}, []); 

return (
    <div>
        <h1>All Travel Plans</h1>
        <ul>
            {travelPlans.map(plan => (
                <li key={plan.id}>
                    <Link to={`/travel-plans/${plan.id}`}>{plan.destination}</Link>
                </li>
            ))}
        </ul>
    </div>
);

}

export default TravelPlansList; 