package Java_and_The_Scripts.travel_planner.controllers;

import Java_and_The_Scripts.travel_planner.models.Review;
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
    public Review createReview(@RequestBody Review review) {
        return reviewRepository.save(review);
    }

    // GET REVIEW BY ID
    @GetMapping("/{id}")
    public Optional<Review> getReviewById(@PathVariable Long id) {
        return reviewRepository.findById(id);
    }

    // UPDATE EXISTING REVIEW
    @PutMapping("/{id}")
    public String updateReview(@PathVariable Long id, @RequestBody Review review) {
        if (reviewRepository.existsById(id)) {
            review.setId(id);
            reviewRepository.save(review);
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

