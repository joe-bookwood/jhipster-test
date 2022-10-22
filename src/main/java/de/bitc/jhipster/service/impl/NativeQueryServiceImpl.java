package de.bitc.jhipster.service.impl;

import de.bitc.jhipster.domain.projection.EmployeeDto;
import de.bitc.jhipster.domain.projection.EmployeeWithDto;
import de.bitc.jhipster.repository.NativeQueryEmployeeRepository;
import de.bitc.jhipster.service.NativeQueryService;
import de.bitc.jhipster.service.dto.NativeQueryTestDTO;
import de.bitc.jhipster.service.dto.NativeWithQueryTestDTO;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class NativeQueryServiceImpl implements NativeQueryService {

    private final Logger log = LoggerFactory.getLogger(NativeQueryServiceImpl.class);

    @Autowired
    private NativeQueryEmployeeRepository nativeQueryEmployeeRepository;

    @Override
    public NativeQueryTestDTO testGet() {
        NativeQueryTestDTO nativeQueryTestDTO = new NativeQueryTestDTO();
        List<EmployeeDto> employeeDtos = nativeQueryEmployeeRepository.nativeQueryAndDto();
        nativeQueryTestDTO.setEmployeeDtos(employeeDtos);
        return nativeQueryTestDTO;
    }

    @Override
    public NativeWithQueryTestDTO testWithGet() {
        NativeWithQueryTestDTO nativeWithQueryTestDTO = new NativeWithQueryTestDTO();
        List<EmployeeWithDto> employeeWithDtos = nativeQueryEmployeeRepository.nativeWithQueryAndDto();
        nativeWithQueryTestDTO.setEmployeeWithDtos(employeeWithDtos);
        return nativeWithQueryTestDTO;
    }
}
