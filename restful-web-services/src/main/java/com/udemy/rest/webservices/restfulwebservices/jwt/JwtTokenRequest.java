package com.udemy.rest.webservices.restfulwebservices.jwt;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class JwtTokenRequest {
    private String username;
    private String password;
}
