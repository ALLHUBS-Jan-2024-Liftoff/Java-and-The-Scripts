import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Header from "./Components/Header/Header";
import Home from './Components/Home/Home'; 
import Login from './Components/Login/Login';
import Profile from './Components/Profile/Profile'; 
import TravelPlanForm from "./Components/TravelPlan/TravelPlanForm"; 
import TravelPlansList from './Components/TravelPlansList/TravelPlansList';
import EditTravelPlan from './Components/EditTravelPlan/EditTravelPlan';
import TravelPlanView from './Components/TravelPlanView/TravelPlanView';
import CreateReview from './Components/CreateReview/CreateReview';
import ReviewList from './Components/ReviewList/ReviewList';
import User from './Components/User/User';
import EditReview from './Components/EditReview/EditReview';
import ActivityForm from "./Components/Activity/ActivityForm.jsx";
import Itinerary from "./Components/Itinerary/Itinerary.jsx"


function App() {
  return (
    <>
      <Header /> 
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} /> 
          <Route path="/create-travel-plan" element={<TravelPlanForm />} />
          <Route path="/travel-plan-view/:id" element={<TravelPlanView />} />
          <Route path="/edit-travel-plan/:id" element={<EditTravelPlan />} />
          <Route path="/travel-plans" element={<TravelPlansList />} />
          <Route path="/create-review" element={<CreateReview />} />
          <Route path="/reviews" element={<ReviewList />} /> 
          <Route path="/reviews/edit-review/:id" element={<EditReview />} /> 
          <Route path="/user" element={<User />} />
          <Route path="/add-activity/:id" element={<ActivityForm/>} />
          <Route path="/itinerary" element={<Itinerary />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
