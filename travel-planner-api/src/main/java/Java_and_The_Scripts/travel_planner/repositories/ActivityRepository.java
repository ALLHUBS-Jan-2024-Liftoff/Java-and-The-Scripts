package Java_and_The_Scripts.travel_planner.repositories;

import Java_and_The_Scripts.travel_planner.entities.ActivityEntity;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ActivityRepository extends JpaRepository<ActivityEntity,Long> {
    @Query(value = "FROM ActivityEntity activityEntity WHERE activityEntity.activityId = :activityIdPassed")
    List<ActivityEntity> findByActivityId(@Param("activityIdPassed") Long activityId);

    @Transactional
    @Modifying
    @Query(value = "UPDATE ActivityEntity activityEntity SET activityEntity.day = :dayPassed, activityEntity.description = :descriptionPassed" +
            " WHERE activityEntity.activityId = :idPassed")
    void updateActivity(@Param("dayPassed")long day, @Param("descriptionPassed")String desc, @Param("idPassed")long id);
}
