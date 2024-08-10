import React, { useState } from 'react';
import axios from 'axios';
import './TravelPlanForm.css';

const TravelPlanForm = () => {
  const [travelPlan, setTravelPlan] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    description: '',
    activities: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTravelPlan({ 
      ...travelPlan, 
      [name]: value 
    });
  };

  const handleActivityChange = (index, event) => {
    const newActivities = [...travelPlan.activities];
    newActivities[index] = event.target.value;
    setTravelPlan((prevPlan) => ({
      ...prevPlan,
      activities: newActivities,
    }));
  };

  const addActivity = () => {
    setTravelPlan((prevPlan) => ({
      ...prevPlan,
      activities: [...prevPlan.activities, ''],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/travelplans/new', travelPlan, {
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
        activities: [],
      });
    } catch (error) {
      console.error('There was an error creating the travel plan!', error);
      alert("There was an error creating the travel plan.");
    }
  };

  return (
    <div>
      <h1>Create Travel Plan</h1>
      <form onSubmit={handleSubmit} className="travel-plan-form">
        <label>
          Destination:
          <input
            type="text"
            id="destination"
            name="destination"
            value={travelPlan.destination}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Start Date:
          <input 
            type="date"
            name="startDate"
            value={travelPlan.startDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          End Date:
          <input 
            type="date"
            name="endDate"
            value={travelPlan.endDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea 
            name="description"
            value={travelPlan.description}
            onChange={handleChange}
            required
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TravelPlanForm;
