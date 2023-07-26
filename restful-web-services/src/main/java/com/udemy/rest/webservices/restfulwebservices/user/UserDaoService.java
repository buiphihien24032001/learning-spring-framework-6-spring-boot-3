package com.udemy.rest.webservices.restfulwebservices.user;

import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

@Component
public class UserDaoService {
    //JPA || Hibernate > database
    //UserDaoService > Static list
    private static List<User> users = new ArrayList<>();
    private static Integer usersCount = 0;
    static {
        users.add(new User(++usersCount, "Adam", LocalDate.now().minusYears(10)));
        users.add(new User(++usersCount, "Eve", LocalDate.now().minusYears(10)));
        users.add(new User(++usersCount, "Jimmy", LocalDate.now().minusYears(10)));
    }

    public List<User> findAll() {
        return users;
    }

    public User findOne(int id) {
        return users.stream().filter(u -> u.getId().equals(id)).findFirst().orElse(null);
    }

    public User saveUser(User user) {
        user.setId(++usersCount);
        users.add(user);
        return user;
    }

    public void deleteById(int id) {
        users.removeIf((Predicate<? super User>) users.stream().filter(u -> u.getId().equals(id)).findFirst().orElse(null));
    }
}
