package Java_and_The_Scripts.travel_planner.repositories;

import Java_and_The_Scripts.travel_planner.entities.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {
    @Query(value = "FROM UserEntity user WHERE user.email = :emailPassed")
    UserEntity findByEmail(@Param("emailPassed") String email);

    boolean existsUserByEmail(String email);
}
