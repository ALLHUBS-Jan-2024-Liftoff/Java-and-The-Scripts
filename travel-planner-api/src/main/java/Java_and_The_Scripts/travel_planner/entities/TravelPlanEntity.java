package Java_and_The_Scripts.travel_planner.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "travel_plan")
public class TravelPlanEntity {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.PERSIST)
    @JoinColumn(name = "user_id")
    private UserEntity userEntityId;

    @NotBlank(message = "Destination is required")
    private String destination;

    private String startDate;

    private String endDate;

    private String description;

    // ONE TRAVEL PLAN FOR MANY ACTIVITIES
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name= "travelPlanId", referencedColumnName = "id")
    private List<ActivityEntity> activities = new ArrayList<>();


    // NO ARGUMENT CONSTRUCTOR
    public TravelPlanEntity() {
    }

    // CONSTRUCTOR

    public TravelPlanEntity(Long id, UserEntity userEntityId, String destination, String startDate, String endDate, String description, List<ActivityEntity> activities) {
        this.id = id;
        this.userEntityId = userEntityId;
        this.destination = destination;
        this.startDate = startDate;
        this.endDate = endDate;
        this.description = description;
        this.activities = activities;
    }


    //GETTERS AND SETTERS


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public UserEntity getUserEntityId() {
        return userEntityId;
    }
    public void setUserId(UserEntity userEntityId) {
        this.userEntityId = userEntityId;
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

    public List<ActivityEntity> getActivities() {
        return activities;
    }

    public void setActivities(List<ActivityEntity> activities) {
        this.activities = activities;
    }
}
