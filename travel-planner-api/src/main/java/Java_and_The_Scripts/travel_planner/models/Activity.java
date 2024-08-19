package Java_and_The_Scripts.travel_planner.models;

public class Activity {
    private long activityId;
    private String description;
    private int day;
    private User user;
    private TravelPlan travelPlan;

    public Activity() {
    }

    public Activity(long activityId, String description, int day, User user, TravelPlan travelPlan) {
        this.activityId = activityId;
        this.description = description;
        this.day = day;
        this.user = user;
        this.travelPlan = travelPlan;
    }

    public TravelPlan getTravelPlan(){
        return travelPlan;
    }

    public void setTravelPlan(TravelPlan travelPlan){
        this.travelPlan = travelPlan;
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
