package de.bitc.jhipster.domain.projection;

import java.time.Instant;

public interface EmployeeDto {
    String getFirstName();

    String getLastName();

    String getEmail();

    Instant getHireDate();
}
