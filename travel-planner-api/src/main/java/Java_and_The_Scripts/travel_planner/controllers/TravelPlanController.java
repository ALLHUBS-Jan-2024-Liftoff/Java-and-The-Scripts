package Java_and_The_Scripts.travel_planner.controllers;

import Java_and_The_Scripts.travel_planner.entites.TravelPlanEntity;
import Java_and_The_Scripts.travel_planner.repositories.TravelPlanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/travelplans")
public class TravelPlanController {

    @Autowired
    private TravelPlanRepository travelPlanRepository;

    // CREATE A NEW TRAVEL PLAN
    @PostMapping("/new")
    public TravelPlanEntity createTravelPlan(@RequestBody TravelPlanEntity travelPlanEntity) {
        return travelPlanRepository.save(travelPlanEntity);
    }

    // GET ALL TRAVEL PLANS
    @GetMapping("/")
    public List<TravelPlanEntity> getAllTravelPlans() {
        return travelPlanRepository.findAll();
    }

    // GET ALL TRAVEL PLANS FOR A USER
    @GetMapping("user/{userId}")
    public List<TravelPlanEntity> getTravelPlansByUserId(@PathVariable Long userId) {
        return travelPlanRepository.findByUserId(userId);
    }

    // GET TRAVEL PLAN BY ID
    @GetMapping("/{id}")
    public Optional<TravelPlanEntity> getTravelPlansById(@PathVariable Long id) {
        return travelPlanRepository.findById(id);
    }

    // UPDATE EXISTING TRAVEL PLAN
    @PutMapping("/{id}")
    public String updateTravelPlan(@PathVariable Long id, @RequestBody TravelPlanEntity travelPlanEntity) {
        if (travelPlanRepository.existsById(id)) {
            travelPlanEntity.setId(id);

            TravelPlanEntity updatedPlan = travelPlanRepository.save(travelPlanEntity);

            return "Travel plan updated successfully.";
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Travel plan not found.");
        }
    }

    // DELETE A TRAVEL PLAN
    @DeleteMapping("/{id}")
    public String deleteTravelPlan(@PathVariable Long id) {
        if (travelPlanRepository.existsById(id)) {
            travelPlanRepository.deleteById(id);
            return "Travel plan deleted successfully.";
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Travel plan does not exist.");
        }
    }
}
