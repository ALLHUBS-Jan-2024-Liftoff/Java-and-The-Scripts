// src/components/TravelPlan/TravelPlanForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './TravelPlanForm.css';

const TravelPlanForm = () => {
  const [formData, setFormData] = useState({
    user: '',
    destination: '',
    startDate: '',
    endDate: '',
    description: '',
    activities: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Convert activities string to array
    const dataToSubmit = { ...formData, activities: formData.activities.split(',').map(activity => activity.trim()) };
    try {
      const response = await axios.post('/api/travelplans/new', dataToSubmit);
      console.log(response.data);
      // Reset form after successful submission
      setFormData({
        user: '',
        destination: '',
        startDate: '',
        endDate: '',
        description: '',
        activities: '',
      });
      alert('Travel plan created successfully');
    } catch (error) {
      console.error('There was an error creating the travel plan!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="travel-plan-form">
      <div className="form-group">
        <label htmlFor="user">User</label>
        <input
          type="text"
          id="user"
          name="user"
          value={formData.user}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="destination">Destination</label>
        <input
          type="text"
          id="destination"
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="endDate">End Date</label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="activities">Activities (comma separated)</label>
        <input
          type="text"
          id="activities"
          name="activities"
          value={formData.activities}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Create Travel Plan</button>
    </form>
  );
};

export default TravelPlanForm;
