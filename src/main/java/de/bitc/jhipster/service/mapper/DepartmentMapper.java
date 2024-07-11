package de.bitc.jhipster.service.mapper;

import de.bitc.jhipster.domain.Department;
import de.bitc.jhipster.domain.Location;
import de.bitc.jhipster.service.dto.DepartmentDTO;
import de.bitc.jhipster.service.dto.LocationDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Department} and its DTO {@link DepartmentDTO}.
 */
@Mapper(componentModel = "spring")
public interface DepartmentMapper extends EntityMapper<DepartmentDTO, Department> {
    @Mapping(target = "location", source = "location", qualifiedByName = "locationId")
    DepartmentDTO toDto(Department s);

    @Named("locationId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    LocationDTO toDtoLocationId(Location location);
}
