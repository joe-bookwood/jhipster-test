package de.bitc.jhipster.service.mapper;

import de.bitc.jhipster.domain.Region;
import de.bitc.jhipster.service.dto.RegionDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Region} and its DTO {@link RegionDTO}.
 */
@Mapper(componentModel = "spring")
public interface RegionMapper extends EntityMapper<RegionDTO, Region> {}
