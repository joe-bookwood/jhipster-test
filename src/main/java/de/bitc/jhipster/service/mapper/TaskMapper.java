package de.bitc.jhipster.service.mapper;

import de.bitc.jhipster.domain.Job;
import de.bitc.jhipster.domain.Task;
import de.bitc.jhipster.service.dto.JobDTO;
import de.bitc.jhipster.service.dto.TaskDTO;
import java.util.Set;
import java.util.stream.Collectors;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Task} and its DTO {@link TaskDTO}.
 */
@Mapper(componentModel = "spring")
public interface TaskMapper extends EntityMapper<TaskDTO, Task> {
    @Mapping(target = "jobs", source = "jobs", qualifiedByName = "jobIdSet")
    TaskDTO toDto(Task s);

    @Mapping(target = "jobs", ignore = true)
    @Mapping(target = "removeJob", ignore = true)
    Task toEntity(TaskDTO taskDTO);

    @Named("jobId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    JobDTO toDtoJobId(Job job);

    @Named("jobIdSet")
    default Set<JobDTO> toDtoJobIdSet(Set<Job> job) {
        return job.stream().map(this::toDtoJobId).collect(Collectors.toSet());
    }
}
