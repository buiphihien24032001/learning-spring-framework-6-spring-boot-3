package com.udemy.springboot.myfirstwebapp.todo;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity(name = "todo_hien")
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false, nullable = false, unique = true)
    private Long id;
    private String username;
    @Size(min=10, message="Enter atleast 10 characters")
    private String description;
    private LocalDate targetDate;
    private Boolean isDone;
}
