import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditTravelPlan = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [travelPlan, setTravelPlan] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    description: '',
  });


  useEffect(() => {
    const fetchTravelPlan = async () => {
      try {
          const response = await axios.get(`http://localhost:8080/api/travelplans/${id}`);
          const data = response.data; 
          setTravelPlan(data);
      } catch (error) {
          console.error('Error fetching travel plan:', error);
          alert("There was an error finding your travel plan.")
      }
    };

    fetchTravelPlan();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTravelPlan({ ...travelPlan, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/travelplans/${id}`, travelPlan, {
        headers: {
          'Content-Type': 'application/json'
          }
      });
      alert("Travel plan updated successfully.");
      navigate('/travel-plans/');
    } catch (error) {
        console.error('Error updating travel plan:', error.response || error);
        alert("There was an error updating the travel plan.");
    }
  };

  return (
    <div>
      <h1>Edit Travel Plan</h1>
      <form onSubmit={handleSubmit} className="edit-travel-plan-form">
        <label for="destination" class="form-label">Destination: </label>
        <input type="text" class="form-control" id="destination" placeholder="Enter Destination" name="destination" value={travelPlan.destination} onChange={handleChange} required />
        <label for="startDate" class="form-label">Start Date: </label>
        <input type="date" class="form-control" name="startDate" value={travelPlan.startDate} onChange={handleChange} required />
        <label for="endDate" class="form-label">End Date: </label>
        <input type="date" class="form-control" name="endDate" value={travelPlan.endDate} onChange={handleChange} required />
        <label for="description" class="form-label">Description: </label>
        <input type="textarea" class="form-control" placeholder="Enter Description" name="description" value={travelPlan.description} onChange={handleChange} required />
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
        <button type="button" class="btn btn-secondary" onClick={() => navigate('/travel-plans')}>Back</button>
    </div>
  );
};

export default EditTravelPlan;
