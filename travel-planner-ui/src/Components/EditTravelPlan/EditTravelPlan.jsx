import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditTravelPlan = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [travelPlan, setTravelPlan] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    description: '',
    activities: [] // Ensure activities is initialized as an array
  });

  useEffect(() => {
    axios.get(`/api/travelplans/${id}`)
      .then(response => {
        const data = response.data;
        setTravelPlan({
          destination: data.destination || '',
          startDate: data.startDate || '',
          endDate: data.endDate || '',
          description: data.description || '',
          activities: data.activities || [] // Ensure activities is always an array
        });
      })
      .catch(error => {
        console.error('Error fetching travel plan:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTravelPlan({ 
      ...travelPlan, 
      [name]: value 
    });
  };

  const handleActivityChange = (index, e) => {
    const newActivities = [...travelPlan.activities];
    newActivities[index] = e.target.value;
    setTravelPlan({ 
      ...travelPlan, 
      activities: newActivities 
    });
  };

  const addActivity = () => {
    setTravelPlan({
      ...travelPlan,
      activities: [...travelPlan.activities, '']
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/travelplans/${id}`, travelPlan);
      alert("Travel plan updated successfully.");
      navigate('/travel-plans');
    } catch (error) {
      console.error('There was an issue updating the travel plan:', error);
      alert("There was an error updating the travel plan. Please try again.");
    }
  };

  return (
    <div>
      <h1>Edit Travel Plan</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Destination:
          <input
            type="text"
            name="destination"
            value={travelPlan.destination}
            onChange={handleChange}
          />
        </label>
        <label>
          Start Date:
          <input
            type="date"
            name="startDate"
            value={travelPlan.startDate}
            onChange={handleChange}
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            name="endDate"
            value={travelPlan.endDate}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={travelPlan.description}
            onChange={handleChange}
          />
        </label>
        <label>Activities:</label>
        {travelPlan.activities.map((activity, index) => (
          <div key={index}>
            <input
              type="text"
              value={activity}
              onChange={(event) => handleActivityChange(index, event)}
            />
          </div>
        ))}
        <button type="button" onClick={addActivity}>Add Activity</button>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditTravelPlan;
