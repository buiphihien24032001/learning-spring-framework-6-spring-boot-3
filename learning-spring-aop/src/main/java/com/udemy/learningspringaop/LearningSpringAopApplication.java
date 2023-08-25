package com.udemy.learningspringaop;

import com.udemy.learningspringaop.aopexample.business.BusinessService1;
import com.udemy.learningspringaop.aopexample.business.BusinessService2;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class LearningSpringAopApplication implements CommandLineRunner {

	private Logger logger = LoggerFactory.getLogger(getClass());

	private BusinessService1 businessService1;

	private BusinessService2 businessService2;

	public LearningSpringAopApplication(BusinessService1 businessService1,
									 BusinessService2 businessService2) {
		this.businessService1 = businessService1;
		this.businessService2 = businessService2;
	}

	public static void main(String[] args) {
		SpringApplication.run(LearningSpringAopApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		logger.info("businessService1 Value returned is {}", businessService1.calculateMax());
		logger.info("businessService2 Value returned is {}", businessService2.calculateMin());
	}

}
