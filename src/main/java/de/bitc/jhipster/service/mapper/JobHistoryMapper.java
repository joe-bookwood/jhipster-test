package de.bitc.jhipster.service.mapper;

import de.bitc.jhipster.domain.Department;
import de.bitc.jhipster.domain.Employee;
import de.bitc.jhipster.domain.Job;
import de.bitc.jhipster.domain.JobHistory;
import de.bitc.jhipster.service.dto.DepartmentDTO;
import de.bitc.jhipster.service.dto.EmployeeDTO;
import de.bitc.jhipster.service.dto.JobDTO;
import de.bitc.jhipster.service.dto.JobHistoryDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link JobHistory} and its DTO {@link JobHistoryDTO}.
 */
@Mapper(componentModel = "spring")
public interface JobHistoryMapper extends EntityMapper<JobHistoryDTO, JobHistory> {
    @Mapping(target = "job", source = "job", qualifiedByName = "jobId")
    @Mapping(target = "department", source = "department", qualifiedByName = "departmentId")
    @Mapping(target = "employee", source = "employee", qualifiedByName = "employeeId")
    JobHistoryDTO toDto(JobHistory s);

    @Named("jobId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    JobDTO toDtoJobId(Job job);

    @Named("departmentId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    DepartmentDTO toDtoDepartmentId(Department department);

    @Named("employeeId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    EmployeeDTO toDtoEmployeeId(Employee employee);
}
