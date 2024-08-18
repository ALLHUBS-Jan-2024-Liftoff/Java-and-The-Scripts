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

  /* const handleSubmitActivity = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/actiivties/new`, travelPlan, {
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
  */

  return (
    <div>
      <h1>Edit Travel Plan</h1>
      <form onSubmit={handleSubmit} className="edit-travel-plan-form">
        <label>
          Destination:
          <input
            type="text"
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
        <button type="submit">Submit</button>
      </form>
      <form onSubmit={handleSubmit} className="activity-form">
          <button>Add Activity</button>
      </form>
    </div>
  );
};

export default EditTravelPlan;
