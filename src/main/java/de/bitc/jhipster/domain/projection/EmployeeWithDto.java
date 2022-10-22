package de.bitc.jhipster.domain.projection;

import java.time.Instant;

public interface EmployeeWithDto {
    String getFirstName();

    String getLastName();

    String getEmail();

    Instant getHireDate();

    Integer getSeconds();
}
