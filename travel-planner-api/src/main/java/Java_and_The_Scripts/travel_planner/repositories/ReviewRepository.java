package Java_and_The_Scripts.travel_planner.repositories;

import Java_and_The_Scripts.travel_planner.entities.ActivityEntity;
import Java_and_The_Scripts.travel_planner.entities.ReviewEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<ReviewEntity, Long> {
    @Query(value = "FROM ReviewEntity review WHERE review.activityEntity.activityId = :activityIdPassed")
    List<ReviewEntity> findByActivityId(@Param("activityIdPassed") Long activityId);

    @Query(value = "FROM ReviewEntity review WHERE review.userEntity.id = :userIdPassed")
    List<ReviewEntity> findByUserId(@Param("userIdPassed") Long userID);
}
