package com.udemy.rest.webservices.restfulwebservices.user;

import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Component
public class UserDaoService {
    //JPA || Hibernate > database
    //UserDaoService > Static list
    private static List<User> users = new ArrayList<>();
    static {
        users.add(new User(1, "Adam", LocalDate.now()));
        users.add(new User(2, "Eve", LocalDate.now()));
        users.add(new User(3, "Jimmy", LocalDate.now()));
    }

    public List<User> findAll() {
        return users;
    }
}
