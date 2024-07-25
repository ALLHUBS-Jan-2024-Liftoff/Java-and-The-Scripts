package Java_and_The_Scripts.travel_planner.repositories;

import Java_and_The_Scripts.travel_planner.models.Activity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ActivityRepository extends JpaRepository<Activity, Long> {
}
