package de.bitc.jhipster.web.rest;

import de.bitc.jhipster.service.NativeQueryService;
import de.bitc.jhipster.service.dto.NativeQueryTestDTO;
import de.bitc.jhipster.service.dto.NativeWithQueryTestDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@Transactional
public class NativeQueryResource {

    @Autowired
    private NativeQueryService nativeQueryService;

    @GetMapping("/test")
    public ResponseEntity<NativeQueryTestDTO> testGet() {
        return ResponseEntity.ok(nativeQueryService.testGet());
    }

    @GetMapping("/with-test")
    public ResponseEntity<NativeWithQueryTestDTO> testWithGet() {
        return ResponseEntity.ok(nativeQueryService.testWithGet());
    }
}
