package de.bitc.jhipster.repository;

import de.bitc.jhipster.domain.Employee;
import de.bitc.jhipster.domain.projection.EmployeeDto;
import de.bitc.jhipster.domain.projection.EmployeeWithDto;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface NativeQueryEmployeeRepository extends JpaRepository<Employee, Long> {
    @Query(
        value = "select FIRST_NAME as firstName,LAST_NAME as lastName,EMAIL as email,HIRE_DATE as hireDate from EMPLOYEE limit 10;",
        nativeQuery = true
    )
    List<EmployeeDto> nativeQueryAndDto();

    @Query(
        value = "with raw as (select FIRST_NAME,LAST_NAME,EMAIL,HIRE_DATE,lag(HIRE_DATE, 1) over (order by HIRE_DATE) as last from EMPLOYEE ), difference as (select FIRST_NAME,LAST_NAME,EMAIL,HIRE_DATE as hireDate,HIRE_DATE - last as DIFF from raw where last is not null limit 10) select FIRST_NAME as firstName,LAST_NAME as lastName,EMAIL as email, hireDate,cast(EXTRACT(epoch FROM diff) as integer) as seconds from difference;",
        nativeQuery = true
    )
    List<EmployeeWithDto> nativeWithQueryAndDto();
}
