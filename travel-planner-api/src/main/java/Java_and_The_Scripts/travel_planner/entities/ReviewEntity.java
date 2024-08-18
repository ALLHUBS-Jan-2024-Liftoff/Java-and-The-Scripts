package Java_and_The_Scripts.travel_planner.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "review")
public class ReviewEntity {

    @Id
    @GeneratedValue
    private Long id;


    // MANY TO ONE ACTIVITY TO REVIEWS
    @ManyToOne(fetch =  FetchType.EAGER)
    @JoinColumn(name = "activity_id")
    private ActivityEntity activityEntity;

    @ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.MERGE)
    @JoinColumn(name = "user_id")
    private UserEntity userEntity;

    private String reviewDescription;

    // RATING SCALE TO BE DECIDED
    private int rating;

    // DEFAULT CONSTRUCTOR
    public ReviewEntity() {
    }

    public ReviewEntity(ActivityEntity activityEntity, String reviewDescription, int rating) {
        this.activityEntity = activityEntity;
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

    public ActivityEntity getActivity() {
        return activityEntity;
    }

    public void setActivity(ActivityEntity activityEntity) {
        this.activityEntity = activityEntity;
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

    public UserEntity getUserEntity() {
        return userEntity;
    }

    public void setUserEntity(UserEntity userEntity) {
        this.userEntity = userEntity;
    }

    @Override
    public String toString() {
        return "ReviewEntity{" +
                "id=" + id +
                ", activityEntity=" + activityEntity +
                ", userEntity=" + userEntity +
                ", reviewDescription='" + reviewDescription + '\'' +
                ", rating=" + rating +
                '}';
    }
}
