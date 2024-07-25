package Java_and_The_Scripts.travel_planner.models;

import jakarta.persistence.*;

@Entity
public class Activity {

    @Id
    @Column(name="activity_id")
    private long activityID;

    @Column(name="description")
    private long description;

    @Column(name="day")
    private int day;

    @ManyToOne(fetch= FetchType.LAZY)
    @JoinColumn(name="user_id")
    private User user;

    public Activity(){
    }

    // Constructor

    public Activity(long activityID, long description, int day, User user) {
        this.activityID = activityID;
        this.description = description;
        this.day = day;
        this.user = user;
    }


    // Getters and setters


    public long getActivityID() {
        return activityID;
    }

    public void setActivityID(long activityID) {
        this.activityID = activityID;
    }

    public long getDescription() {
        return description;
    }

    public void setDescription(long description) {
        this.description = description;
    }

    public int getDay() {
        return day;
    }

    public void setDay(int day) {
        this.day = day;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
