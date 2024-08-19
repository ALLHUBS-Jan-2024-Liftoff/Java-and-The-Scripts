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
        </Routes>
      </main>
    </>
  );
}

export default App;
