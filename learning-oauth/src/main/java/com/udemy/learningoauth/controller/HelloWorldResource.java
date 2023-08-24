package com.udemy.learningoauth.controller;


import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldResource {

    @GetMapping("/")
    public Authentication helloWorld(Authentication authentication) {
        System.out.println(authentication);
        return authentication;
    }
}
