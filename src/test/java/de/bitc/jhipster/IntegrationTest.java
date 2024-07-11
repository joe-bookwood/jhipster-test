package de.bitc.jhipster;

import de.bitc.jhipster.config.AsyncSyncConfiguration;
import de.bitc.jhipster.config.EmbeddedSQL;
import de.bitc.jhipster.config.JacksonConfiguration;
import de.bitc.jhipster.config.TestSecurityConfiguration;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import org.springframework.boot.test.context.SpringBootTest;

/**
 * Base composite annotation for integration tests.
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@SpringBootTest(
    classes = { JhipsterTestApp.class, JacksonConfiguration.class, AsyncSyncConfiguration.class, TestSecurityConfiguration.class }
)
@EmbeddedSQL
public @interface IntegrationTest {
}
