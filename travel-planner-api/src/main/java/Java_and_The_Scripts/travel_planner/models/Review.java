package Java_and_The_Scripts.travel_planner.models;

public class Review {
    private Long id;
    private Activity activity;
    private String reviewDescription;
    private int rating;
    private User user;

    public Review() {
    }

    public Review(Long id, Activity activity, String reviewDescription, int rating, User user) {
        this.id = id;
        this.activity = activity;
        this.reviewDescription = reviewDescription;
        this.rating = rating;
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Activity getActivity() {
        return activity;
    }

    public void setActivity(Activity activity) {
        this.activity = activity;
    }

    public String getReviewDescription() {
        return reviewDescription;
    }

    public void setReviewDescription(String reviewDescription) {
        this.reviewDescription = reviewDescription;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
