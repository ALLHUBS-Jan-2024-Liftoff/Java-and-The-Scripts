package Java_and_The_Scripts.travel_planner.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotBlank;

@Entity
public class Review {

    @Id
    @GeneratedValue
    private Long id;


    // MANY TO ONE ACTIVITY TO REVIEWS
    @ManyToOne
    private Activity activity;

    private String reviewDescription;

    // RATING SCALE TO BE DECIDED
    private int rating;

    // DEFAULT CONSTRUCTOR
    public Review() {
    }

    public Review(Activity activity, String reviewDescription, int rating) {
        this.activity = activity;
        this.reviewDescription = reviewDescription;
        this.rating = rating;
    }

    // GETTERS AND SETTERS

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
