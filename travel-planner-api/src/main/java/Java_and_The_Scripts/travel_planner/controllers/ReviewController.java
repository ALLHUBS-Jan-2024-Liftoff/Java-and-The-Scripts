package Java_and_The_Scripts.travel_planner.controllers;

import Java_and_The_Scripts.travel_planner.entities.EntityMapper;
import Java_and_The_Scripts.travel_planner.entities.ReviewEntity;
import Java_and_The_Scripts.travel_planner.models.Review;
import Java_and_The_Scripts.travel_planner.repositories.ActivityRepository;
import Java_and_The_Scripts.travel_planner.repositories.ReviewRepository;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/reviews")
@CrossOrigin(origins = "http://localhost:5173")
public class ReviewController {

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private ActivityRepository activityRepository;

    @Autowired
    private AuthController authController;

    // CREATE A NEW REVIEW
    @PostMapping("/new")
    public ReviewEntity createReview(@RequestBody Review review, HttpServletRequest request) {
        ReviewEntity reviewEntity = EntityMapper.mapper.reviewToReviewEntity(review);
        reviewEntity.setUserEntity(authController.getUserFromSession(request.getSession()));
        return reviewRepository.save(reviewEntity);
    }
    // GET ALL REVIEWS
    @GetMapping
    public List<ReviewEntity> getAllReviews(HttpServletRequest request) {
        return reviewRepository.findByUserId(authController.getUserFromSession(request.getSession()).getId());
    }

    // GET REVIEW BY ID
    @GetMapping("/{id}")
    public Optional<ReviewEntity> getReviewById(@PathVariable Long id) {
        return reviewRepository.findById(id);
    }

    // UPDATE EXISTING REVIEW//
    @PutMapping("/{id}")
    public String updateReview(@PathVariable Long id, @RequestBody Review review) {
        Optional<ReviewEntity> existingReviewOptional = reviewRepository.findById(id);

        if (existingReviewOptional.isPresent()) {
            ReviewEntity existingReview = existingReviewOptional.get();
            ReviewEntity updatedReview = EntityMapper.mapper.reviewToReviewEntity(review);
            updatedReview.setId(existingReview.getId());
            reviewRepository.save(updatedReview);
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

