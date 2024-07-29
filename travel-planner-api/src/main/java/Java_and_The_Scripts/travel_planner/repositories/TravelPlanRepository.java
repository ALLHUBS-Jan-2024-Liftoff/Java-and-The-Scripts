package Java_and_The_Scripts.travel_planner.repositories;

import Java_and_The_Scripts.travel_planner.entities.TravelPlanEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TravelPlanRepository extends JpaRepository<TravelPlanEntity,Long> {
    @Query(value = "FROM TravelPlanEntity tp WHERE tp.userEntityId.id = :userIdPassed")
    List<TravelPlanEntity> findByUserId(@Param("userIdPassed") long userId);

}
