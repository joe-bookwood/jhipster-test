package de.bitc.jhipster.service.mapper;

import de.bitc.jhipster.domain.Country;
import de.bitc.jhipster.domain.Region;
import de.bitc.jhipster.service.dto.CountryDTO;
import de.bitc.jhipster.service.dto.RegionDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Country} and its DTO {@link CountryDTO}.
 */
@Mapper(componentModel = "spring")
public interface CountryMapper extends EntityMapper<CountryDTO, Country> {
    @Mapping(target = "region", source = "region", qualifiedByName = "regionId")
    CountryDTO toDto(Country s);

    @Named("regionId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    RegionDTO toDtoRegionId(Region region);
}
