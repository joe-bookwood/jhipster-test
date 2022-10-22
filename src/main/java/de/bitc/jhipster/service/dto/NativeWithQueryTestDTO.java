package de.bitc.jhipster.service.dto;

import de.bitc.jhipster.domain.projection.EmployeeWithDto;
import java.util.List;

public class NativeWithQueryTestDTO {

    public List<EmployeeWithDto> employeeWithDtos;

    public List<EmployeeWithDto> getEmployeeWithDtos() {
        return employeeWithDtos;
    }

    public void setEmployeeWithDtos(List<EmployeeWithDto> employeeWithDtos) {
        this.employeeWithDtos = employeeWithDtos;
    }
}
