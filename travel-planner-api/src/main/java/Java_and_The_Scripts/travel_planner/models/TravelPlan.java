package Java_and_The_Scripts.travel_planner.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;

@Entity
public class TravelPlan {
    @Id
    @GeneratedValue
    private Long id;

    private Long userId;

    @NotBlank(message = "Destination is required")
    private String destination;

    private String startDate;

    private String endDate;

    private String description;

    // NO ARGUMENT CONSTRUCTOR
    public TravelPlan() {
    }

    // CONSTRUCTOR
    public TravelPlan(Long id, Long userId, String destination, String startDate, String endDate, String description) {
        this.id = id;
        this.userId = userId;
        this.destination = destination;
        this.startDate = startDate;
        this.endDate = endDate;
        this.description = description;
    }

    //GETTERS AND SETTERS


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
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
}
