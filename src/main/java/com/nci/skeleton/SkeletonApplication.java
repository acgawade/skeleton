package com.nci.skeleton;

import com.nci.skeleton.entity.TestEntity;
import com.nci.skeleton.repository.TestRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.UUID;

@SpringBootApplication
public class SkeletonApplication {

    public static void main(String[] args) {
        SpringApplication.run(SkeletonApplication.class, args);
    }

    @Bean
    public CommandLineRunner init(TestRepository testRepository) {
        return new CommandLineRunner() {

            @Override
            public void run(String... args) throws Exception {

                for (int i = 0; i < 10; i++) {
                    TestEntity testEntity=new TestEntity();
                    testEntity.setTestId(UUID.randomUUID());
                    testEntity.setTestName("Test-Name-"+i);
                    testEntity.setTestValue("Test-Value-"+i);
                    testRepository.save(testEntity);
                }
            }
        };
    }

}
