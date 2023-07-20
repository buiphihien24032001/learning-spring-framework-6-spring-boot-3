package com.udemy.learnspringframework.helloworld;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import java.util.Arrays;

public class App02HelloWorldSpring {
    public static void main(String[] args) {
        //1: Launch a Spring Context
        var context = new AnnotationConfigApplicationContext(HelloWorldConfiguration.class);
        //2: Configure the things that we want Spring to manage - @Configuration
        //HelloWorldConfiguration - @Configuration
        //name - Bean
        //3: Retrieving Beans managed by Spring
        System.out.println("name: " + context.getBean("name"));
        System.out.println("age: " + context.getBean("age"));
        System.out.println("person: " + context.getBean("person"));
        System.out.println("person2MethodCall: " + context.getBean("person2MethodCall"));
        System.out.println("person3Parameters: " + context.getBean("person3Parameters"));
        System.out.println("address2: " + context.getBean("address2"));
        System.out.println("Person.class: " + context.getBean(Person.class));
        System.out.println("Address.class: " + context.getBean(Address.class));
        System.out.println("person5Qualifier: " + context.getBean("person5Qualifier"));
        Arrays.stream(context.getBeanDefinitionNames()).forEach(System.out::println);
        System.out.println("Count Beans have defined : " + context.getBeanDefinitionCount());
    }
}
