package Java_and_The_Scripts.travel_planner.models;

public class Review {
    private Long id;
    private Activity activity;
    private String reviewDescription;
    private int rating;

    public Review() {
    }

    public Review(Long id, Activity activity, String reviewDescription, int rating) {
        this.id = id;
        this.activity = activity;
        this.reviewDescription = reviewDescription;
        this.rating = rating;
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
}
