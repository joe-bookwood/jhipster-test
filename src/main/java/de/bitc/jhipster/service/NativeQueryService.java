package de.bitc.jhipster.service;

import de.bitc.jhipster.service.dto.NativeQueryTestDTO;
import de.bitc.jhipster.service.dto.NativeWithQueryTestDTO;

public interface NativeQueryService {
    NativeQueryTestDTO testGet();

    NativeWithQueryTestDTO testWithGet();
}
