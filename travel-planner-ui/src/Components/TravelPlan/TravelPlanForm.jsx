import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";


const TravelPlanForm = () => {
  const [travelPlan, setTravelPlan] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    description: '',
  });
const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTravelPlan({ 
      ...travelPlan, 
      [name]: value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/travelplans/new', travelPlan, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json'
        }
      });
      alert("Travel plan created successfully.");
      // Reset form after successful submission
      setTravelPlan({
        destination: '',
        startDate: '',
        endDate: '',
        description: '',
      });
    navigate('/travel-plans');
    } catch (error) {
      console.error('There was an error creating the travel plan!', error);
      alert("There was an error creating the travel plan.");
    }
  };

return (
    <div class="mb-3">
      <h1>Create Travel Plan</h1>
      <form onSubmit={handleSubmit} className="travel-plan-form">
        <label htmlFor="destination" class="form-label">Destination: </label>
        <input type="text" class="form-control" id="destination" placeholder="Enter Destination" name="destination" value={travelPlan.destination} onChange={handleChange} required />
        <label htmlFor="startDate" class="form-label">Start Date: </label>
        <input type="date" class="form-control" name="startDate" value={travelPlan.startDate} onChange={handleChange} required />
        <label htmlFor="endDate" class="form-label">End Date: </label>
        <input type="date" class="form-control" name="endDate" value={travelPlan.endDate} onChange={handleChange} required />
        <label htmlFor="description" class="form-label">Description: </label>
        <input type="textarea" class="form-control" placeholder="Enter Description" name="description" value={travelPlan.description} onChange={handleChange} required />
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default TravelPlanForm;
