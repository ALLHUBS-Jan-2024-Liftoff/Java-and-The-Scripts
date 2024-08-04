import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Header from "./Components/Header/Header";
import Home from './Components/Home/Home'; 
import Profile from './Components/Profile/Profile'; 
import TravelPlanForm from "./Components/TravelPlan/TravelPlanForm"; 
import TravelPlansList from './Components/TravelPlansList/TravelPlansList';
import CreateReview from './Components/CreateReview/CreateReview';

function App() {
  return (
    <>
      <Header /> 
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} /> 
          <Route path="/create-travel-plan" element={<TravelPlanForm />} />
          <Route path="/travel-plans" element={<TravelPlansList />} />
          <Route path="/create-review" element={<CreateReview />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
