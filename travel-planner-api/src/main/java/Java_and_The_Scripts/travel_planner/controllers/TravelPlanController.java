package Java_and_The_Scripts.travel_planner.controllers;

import Java_and_The_Scripts.travel_planner.entities.ActivityEntity;
import Java_and_The_Scripts.travel_planner.entities.EntityMapper;
import Java_and_The_Scripts.travel_planner.entities.TravelPlanEntity;
import Java_and_The_Scripts.travel_planner.models.TravelPlan;
import Java_and_The_Scripts.travel_planner.repositories.ActivityRepository;
import Java_and_The_Scripts.travel_planner.repositories.ReviewRepository;
import Java_and_The_Scripts.travel_planner.repositories.TravelPlanRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/travelplans")
@CrossOrigin(origins = "http://localhost:5173")
public class TravelPlanController {

    private static final Logger log = LoggerFactory.getLogger(TravelPlanController.class);
    @Autowired
    private TravelPlanRepository travelPlanRepository;
    @Autowired
    private ActivityRepository activityRepository;
    @Autowired
    private ReviewRepository reviewRepository;

    // CREATE A NEW TRAVEL PLAN
    @PostMapping("/new")
    public TravelPlanEntity createTravelPlan(@RequestBody TravelPlan travelPlan) {

        TravelPlanEntity travelPlanEntity = EntityMapper.mapper.travelPlanToTravelPlanEntity(travelPlan);
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
    public String updateTravelPlan(@PathVariable Long id, @RequestBody TravelPlan travelPlan) {
        if (travelPlanRepository.existsById(id)) {
            TravelPlanEntity travelPlanEntity = EntityMapper.mapper.travelPlanToTravelPlanEntity(travelPlan);
            travelPlanEntity.setId(id);

            travelPlanRepository.save(travelPlanEntity);

            return "Travel plan updated successfully.";
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Travel plan not found.");
        }
    }

    // DELETE A TRAVEL PLAN
    @DeleteMapping("/{id}")
    public String deleteTravelPlan(@PathVariable Long id) {
        if (travelPlanRepository.existsById(id)) {
            TravelPlanEntity travelPlanEntity = travelPlanRepository.findById(id).get();
            List<ActivityEntity> listAcs = travelPlanEntity.getActivities();
            for (ActivityEntity act : listAcs) {
                reviewRepository.deletebyActivityId(act.getActivityId());
            }
            activityRepository.deleteAll(travelPlanEntity.getActivities());
            travelPlanRepository.deleteById(id);
            return "Travel plan deleted successfully.";
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Travel plan does not exist.");
        }
    }
}
