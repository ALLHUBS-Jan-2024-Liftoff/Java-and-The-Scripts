package Java_and_The_Scripts.travel_planner.repositories;

import Java_and_The_Scripts.travel_planner.entites.TravelPlanEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TravelPlanRepository extends JpaRepository<TravelPlanEntity,Long> {
    List<TravelPlanEntity> findByUserId(Long userId);

}
