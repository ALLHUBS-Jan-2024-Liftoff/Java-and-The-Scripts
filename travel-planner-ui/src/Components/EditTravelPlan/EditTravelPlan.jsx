import React, { useEffect, useState } from 'react'; 
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditTravelPlan = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [travelPlan, setTravelPlan] = useState({
        destination: '',
        startDate: '',
        endDate:'', 
    });


useEffect(() => {
    axios.get(`/api/travelplans/${id}`)
        .then(response => {
            setTravelPlan(response.data);
        })
        .catch(error => {
            console.error("There was an error, try again.", error)
        })

}, [id]);

const handleChange = (e) => {
    const { name, value } = e.target;
    setTravelPlan({...travelPlan, [name]: value});
    };

const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/api/travelplans/${id}`, travelPlan)
        .then(() => {
            navigate('/travel-plans');
        })
        .catch(error => {
            console.error("There was an issue updating the travel plan. Please try again.")
        });
    }


return (
    <div>
        <hi>Edit Travel Plan</hi>
            <form onSubmit={handleSubmit}>
                <label>
                    Destination:
                    <input type="text" name="destination" value={travelPlan.destination} onChange={handleChange} /> 
                </label>
                <label>
                    Start Date:
                    <input type="date" name="startDate" value={travelPlan.startDate} onChange={handleChange} /> 
                </label>
                <label>
                    End Date:
                    <input type="date" name="endDate" value={travelPlan.endDate} onChange={handleChange} /> 
                </label>
                <button type="submit">Save</button>
            </form>
    </div>
    );
};

export default EditTravelPlan; 