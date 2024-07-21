package Java_and_The_Scripts.travel_planner.controllers;

import Java_and_The_Scripts.travel_planner.models.TravelPlan;
import Java_and_The_Scripts.travel_planner.repositories.TravelPlanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/travelplans")
public class TravelPlanController {

    @Autowired
    private TravelPlanRepository travelPlannerRepository;
    public List<TravelPlan> getAllTravelPlans() {
        return travelPlannerRepository.findAll();
    }

}
