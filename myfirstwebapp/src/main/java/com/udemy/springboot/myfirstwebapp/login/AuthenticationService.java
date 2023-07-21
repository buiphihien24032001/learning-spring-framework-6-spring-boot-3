package com.udemy.springboot.myfirstwebapp.login;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {

    public boolean authenticate(String username, String password) {
        boolean isValidUsername = username.equalsIgnoreCase("jameshien");
        boolean isValidPassword = password.equalsIgnoreCase("123");
        return isValidUsername && isValidPassword;
    }
}
