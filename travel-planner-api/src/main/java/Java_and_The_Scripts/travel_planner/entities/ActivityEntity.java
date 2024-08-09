package Java_and_The_Scripts.travel_planner.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "activity")
public class ActivityEntity {
    @Column(name="day")
    private int day;

    @ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.MERGE)
    @JoinColumn(name = "user_id")
    private UserEntity userEntity;

    @Column(name="activity_desc")
    private String description;


    @Id
    @GeneratedValue
    @Column(name = "activity_id")
    private long activityId;

    public ActivityEntity() {}

    public ActivityEntity(long activityId, String description, int day, UserEntity userEntity) {
        this.activityId = activityId;
        this.day = day;
        this.userEntity = userEntity;
    }

    public long getActivityId() {
        return activityId;
    }

    public void setActivityId(long activityId) {
        this.activityId = activityId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getDay() {
        return day;
    }

    public void setDay(int day) {
        this.day = day;
    }

    public UserEntity getUser() {
        return userEntity;
    }

    public void setUser(UserEntity userEntity) {
        this.userEntity = userEntity;
    }
}
