package Java_and_The_Scripts.travel_planner.controllers;


import Java_and_The_Scripts.travel_planner.entities.ActivityEntity;
import Java_and_The_Scripts.travel_planner.entities.EntityMapper;
import Java_and_The_Scripts.travel_planner.models.Activity;
import Java_and_The_Scripts.travel_planner.repositories.ActivityRepository;
import Java_and_The_Scripts.travel_planner.repositories.ReviewRepository;
import Java_and_The_Scripts.travel_planner.repositories.TravelPlanRepository;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/activities")
@CrossOrigin(origins = "http://localhost:5173")
public class ActivityController {

    @Autowired
    private ActivityRepository activityRepository;

    @Autowired
    private TravelPlanRepository travelPlanRepository;
    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private AuthController authController;

    //FETCH ALL ACTIVITIES
    @GetMapping
    public List<ActivityEntity> getAllActivities() {
        return activityRepository.findAll();
    }

    // Create a new activity
    @PostMapping("/new")
    public ActivityEntity createActivity(@RequestBody Activity activity, HttpServletRequest request){
        ActivityEntity activityEntity = EntityMapper.mapper.activityToActivityEntity(activity);
        activityEntity.setUser(authController.getUserFromSession(request.getSession()));
        return activityRepository.save(activityEntity);
    }

    // Get activity by ID
    @GetMapping("/{id}")
    public Optional<ActivityEntity> getActivitiesById(@PathVariable Long id){
        return activityRepository.findById(id);
    }

    // Update activity
    @PutMapping("/{id}")
    public String updateActivity(@PathVariable Long id, @RequestBody Activity activity) {
        if (activityRepository.existsById(id)) {
            ActivityEntity activityEntity = EntityMapper.mapper.activityToActivityEntity(activity);
            activityEntity.setActivityId(id);

            activityRepository.updateActivity(activityEntity.getDay(),activityEntity.getDescription(),activityEntity.getActivityId());

            return "Activity updated successfully!";
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Activity not found");
        }
    }

    // Delete an activity
    @DeleteMapping("/{id}")
    public String deleteActivity(@PathVariable Long id) {
        if (activityRepository.existsById(id)) {
            ActivityEntity activityEntity = activityRepository.getById(id);
            reviewRepository.deletebyActivityId(activityEntity.getActivityId());
            activityRepository.deleteById(id);
            return "Activity deleted successfully!";
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Activity does not exist");
        }
    }


}
