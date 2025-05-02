package com.nci.skeleton.controller;

import com.nci.skeleton.entity.TestEntity;
import com.nci.skeleton.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/test")
public class TestController {

    @Value("application.test.key")
    String testValue;

    private final TestService testService;

    @Autowired
    public TestController(TestService testService) {
        this.testService = testService;
    }

    @GetMapping
    public ResponseEntity<String> getAllTestData() {
        System.out.println("Test Value is : "+testValue);
        return new ResponseEntity<>(testValue, HttpStatus.OK);
    }

}
