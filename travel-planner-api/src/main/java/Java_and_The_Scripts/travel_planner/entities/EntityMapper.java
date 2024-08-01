package Java_and_The_Scripts.travel_planner.entities;

import Java_and_The_Scripts.travel_planner.models.TravelPlan;
import Java_and_The_Scripts.travel_planner.models.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper
public interface EntityMapper {
    EntityMapper mapper = Mappers.getMapper(EntityMapper.class);

    @Mapping(source = "user", target = "userId")
    TravelPlanEntity travelPlanToTravelPlanEntity(TravelPlan travelPlan);
    @Mapping(source = "userEntityId", target = "user")
    TravelPlan travelPlanEntityToTravelPlan(TravelPlanEntity travelPlanEntity);

    UserEntity userToUserEntity(User user);
    User userEntityToUser(UserEntity userEntity);
}
