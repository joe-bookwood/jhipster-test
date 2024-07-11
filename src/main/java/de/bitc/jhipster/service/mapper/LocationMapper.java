package de.bitc.jhipster.service.mapper;

import de.bitc.jhipster.domain.Country;
import de.bitc.jhipster.domain.Location;
import de.bitc.jhipster.service.dto.CountryDTO;
import de.bitc.jhipster.service.dto.LocationDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Location} and its DTO {@link LocationDTO}.
 */
@Mapper(componentModel = "spring")
public interface LocationMapper extends EntityMapper<LocationDTO, Location> {
    @Mapping(target = "country", source = "country", qualifiedByName = "countryId")
    LocationDTO toDto(Location s);

    @Named("countryId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    CountryDTO toDtoCountryId(Country country);
}
