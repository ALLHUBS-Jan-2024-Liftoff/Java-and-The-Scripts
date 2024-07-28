package Java_and_The_Scripts.travel_planner.entites;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface EntityMapper {
    EntityMapper mapper = Mappers.getMapper(EntityMapper.class);

}
