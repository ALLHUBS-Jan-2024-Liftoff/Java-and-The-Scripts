import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header/Header";
import { Routes, Route } from 'react-router-dom';
import TravelPlanForm from "./Components/TravelPlan/TravelPlanForm"; 
import TravelPlansList from './Components/TravelPlanList/TravelPlansList';

function App() {
  return (
    <>
      <Header /> 
      <main>
        <Routes>
          <Route path="/create-travel-plan" element={<TravelPlanForm />} />
          <Route path="/travel-plans" element={<TravelPlansList />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
