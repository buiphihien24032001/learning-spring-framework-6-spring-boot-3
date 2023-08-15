package com.udemy.rest.webservices.restfulwebservices.todo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TodoDto {
    private Integer id;
    private String username;
    private String description;
    private String targetDate;
    private Boolean done;
}
