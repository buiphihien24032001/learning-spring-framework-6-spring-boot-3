package com.udemy.rest.webservices.restfulwebservices.jwt;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class JwtTokenResponse {
    private String token;
}
