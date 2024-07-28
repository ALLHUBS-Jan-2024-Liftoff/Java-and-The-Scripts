package Java_and_The_Scripts.travel_planner.models;

import java.util.ArrayList;
import java.util.List;

public class TravelPlan {
    private Long id;
    private User user;
    private String destination;
    private String startDate;
    private String endDate;
    private String description;
    private List<Activity> activities = new ArrayList<>();

    public TravelPlan(Long id, User user, String destination, String startDate, String endDate, String description, List<Activity> activities) {
        this.id = id;
        this.user = user;
        this.destination = destination;
        this.startDate = startDate;
        this.endDate = endDate;
        this.description = description;
        this.activities = activities;
    }

    public TravelPlan() {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Activity> getActivities() {
        return activities;
    }

    public void setActivities(List<Activity> activities) {
        this.activities = activities;
    }
}
