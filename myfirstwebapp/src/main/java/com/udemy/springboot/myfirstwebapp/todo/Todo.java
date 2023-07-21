package com.udemy.springboot.myfirstwebapp.todo;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Todo {
    @Id
    private Long id;
    private String username;
    private String description;
    private LocalDate targetDate;
    private Boolean isDone;
}
