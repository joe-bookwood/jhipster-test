package de.bitc.jhipster.service.dto;

import de.bitc.jhipster.domain.projection.EmployeeDto;
import java.util.List;

public class NativeQueryTestDTO {

    private List<EmployeeDto> employeeDtos;

    public List<EmployeeDto> getEmployeeDtos() {
        return employeeDtos;
    }

    public void setEmployeeDtos(List<EmployeeDto> employeeDtos) {
        this.employeeDtos = employeeDtos;
    }
}
