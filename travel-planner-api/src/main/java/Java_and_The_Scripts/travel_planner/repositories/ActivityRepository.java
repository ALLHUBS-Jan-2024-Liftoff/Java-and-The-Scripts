package Java_and_The_Scripts.travel_planner.repositories;

import Java_and_The_Scripts.travel_planner.entities.ActivityEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ActivityRepository extends JpaRepository<ActivityEntity,Long> {
    @Query(value = "FROM ActivityEntity activity WHERE activityEntity.activityID = :activityIdPassed")
    List<ActivityEntity> findByActivityId(@Param("activityIdPassed") Long activityId);
}
