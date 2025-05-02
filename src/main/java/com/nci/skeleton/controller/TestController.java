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

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/test")
public class TestController {

    @Value("${myKey1}")
    String testValue1;

    @Value("${myKey2}")
    String testValue2;

    @Value("${myKey3}")
    String testValue3;

    private final TestService testService;

    @Autowired
    public TestController(TestService testService) {
        this.testService = testService;
    }

    @GetMapping
    public ResponseEntity<Map<String, String>> getAllTestData() {
        System.out.println("Test Value1 is : "+testValue1+" and Test Value2 is : "+testValue2);
        Map<String, String> map= new HashMap<>();
        map.put("key1", testValue1);
        map.put("key2", testValue2);
        map.put("key3", testValue3);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

}
