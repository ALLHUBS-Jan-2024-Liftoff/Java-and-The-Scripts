package Java_and_The_Scripts.travel_planner.controllers;


import Java_and_The_Scripts.travel_planner.entities.ActivityEntity;
import Java_and_The_Scripts.travel_planner.entities.EntityMapper;
import Java_and_The_Scripts.travel_planner.models.Activity;
import Java_and_The_Scripts.travel_planner.repositories.ActivityRepository;
import Java_and_The_Scripts.travel_planner.repositories.TravelPlanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@RestController
@RequestMapping("/api/activities")
public class ActivityController {

    @Autowired
    private ActivityRepository activityRepository;

    @Autowired
    private TravelPlanRepository travelPlanRepository;

    // Create a new activity
    @PostMapping("/new")
    public ActivityEntity createActivity(@RequestBody Activity activity){
        ActivityEntity activityEntity = EntityMapper.mapper.activityToActivityEntity(activity);
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

            activityRepository.save(activityEntity);

            return "Activity updated successfully!";
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Activity not found");
        }
    }

    // Delete an activity
    @DeleteMapping("/{id}")
    public String deleteActivity(@PathVariable Long id) {
        if (activityRepository.existsById(id)) {
            travelPlanRepository.deleteById(id);
            return "Activity deleted successfully!";
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Activity does not exist");
        }
    }


}
