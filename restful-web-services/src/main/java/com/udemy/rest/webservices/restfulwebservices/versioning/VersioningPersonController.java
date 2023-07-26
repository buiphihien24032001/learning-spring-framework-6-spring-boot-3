package com.udemy.rest.webservices.restfulwebservices.versioning;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class VersioningPersonController {

    @GetMapping("/v1/person")
    public PersonV1 getFirstVersionOfPerson() {
        return new PersonV1("Bobby Charlie");
    }

//    @GetMapping("/v2/person")
//    public Person getSecondVersionOfPerson() {
//
//    }
}
