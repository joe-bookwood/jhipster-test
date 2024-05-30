package de.bitc.jhipster.domain;

import static org.assertj.core.api.Assertions.assertThat;

public class JobAsserts {

    /**
     * Asserts that the entity has all properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertJobAllPropertiesEquals(Job expected, Job actual) {
        assertJobAutoGeneratedPropertiesEquals(expected, actual);
        assertJobAllUpdatablePropertiesEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all updatable properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertJobAllUpdatablePropertiesEquals(Job expected, Job actual) {
        assertJobUpdatableFieldsEquals(expected, actual);
        assertJobUpdatableRelationshipsEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all the auto generated properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertJobAutoGeneratedPropertiesEquals(Job expected, Job actual) {
        assertThat(expected)
            .as("Verify Job auto generated properties")
            .satisfies(e -> assertThat(e.getId()).as("check id").isEqualTo(actual.getId()));
    }

    /**
     * Asserts that the entity has all the updatable fields set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertJobUpdatableFieldsEquals(Job expected, Job actual) {
        assertThat(expected)
            .as("Verify Job relevant properties")
            .satisfies(e -> assertThat(e.getJobTitle()).as("check jobTitle").isEqualTo(actual.getJobTitle()))
            .satisfies(e -> assertThat(e.getMinSalary()).as("check minSalary").isEqualTo(actual.getMinSalary()))
            .satisfies(e -> assertThat(e.getMaxSalary()).as("check maxSalary").isEqualTo(actual.getMaxSalary()));
    }

    /**
     * Asserts that the entity has all the updatable relationships set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertJobUpdatableRelationshipsEquals(Job expected, Job actual) {
        assertThat(expected)
            .as("Verify Job relationships")
            .satisfies(e -> assertThat(e.getTasks()).as("check tasks").isEqualTo(actual.getTasks()))
            .satisfies(e -> assertThat(e.getEmployee()).as("check employee").isEqualTo(actual.getEmployee()));
    }
}
