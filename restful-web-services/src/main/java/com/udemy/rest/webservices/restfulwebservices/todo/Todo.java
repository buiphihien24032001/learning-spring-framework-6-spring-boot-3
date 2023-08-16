package com.udemy.rest.webservices.restfulwebservices.todo;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "todo")
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false, nullable = false, unique = true)
    private Integer id;
    private String username;
    private String description;
    private LocalDate targetDate;
    private Boolean done;

    public LocalDate convertStringToDate(String targetDate) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        return LocalDate.parse(targetDate, formatter);
    }

    public Todo(TodoDto todoDto) {
        this.id = todoDto.getId();
        this.username = todoDto.getUsername();
        this.description = todoDto.getDescription();
        this.targetDate = convertStringToDate(todoDto.getTargetDate());
        this.done = todoDto.getDone();
    }
}