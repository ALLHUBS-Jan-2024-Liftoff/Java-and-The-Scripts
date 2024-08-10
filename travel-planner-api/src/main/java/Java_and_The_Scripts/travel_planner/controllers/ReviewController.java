package Java_and_The_Scripts.travel_planner.controllers;

import Java_and_The_Scripts.travel_planner.entities.EntityMapper;
import Java_and_The_Scripts.travel_planner.entities.ReviewEntity;
import Java_and_The_Scripts.travel_planner.models.Review;
import Java_and_The_Scripts.travel_planner.repositories.ActivityRepository;
import Java_and_The_Scripts.travel_planner.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private ActivityRepository activityRepository;

    // CREATE A NEW REVIEW
    @PostMapping("/new")
    public ReviewEntity createReview(@RequestBody Review review) {
        ReviewEntity reviewEntity = EntityMapper.mapper.reviewToReviewEntity(review);
        return reviewRepository.save(reviewEntity);
    }

    // GET REVIEW BY ID
    @GetMapping("/{id}")
    public Optional<ReviewEntity> getReviewById(@PathVariable Long id) {
        return reviewRepository.findById(id);
    }

    // UPDATE EXISTING REVIEW
    @PutMapping("/{id}")
    public String updateReview(@PathVariable Long id, @RequestBody Review review) {
        if (reviewRepository.existsById(id)) {
            ReviewEntity reviewEntity = EntityMapper.mapper.reviewToReviewEntity(review);
            reviewRepository.save(reviewEntity);
            return "Review updated successfully.";
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Review not found.");
        }
    }

    // DELETE A REVIEW
    @DeleteMapping("/{id}")
    public String deleteReview(@PathVariable Long id) {
        if (reviewRepository.existsById(id)) {
            reviewRepository.deleteById(id);
            return "Review deleted successfully.";
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Review not found.");
        }
    }


}

