package com.udemy.rest.webservices.restfulwebservices.todo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TodoRestController {

    @Autowired
    private TodoService todoService;

    @GetMapping("/users/{username}/todos")
    public List<Todo> retrieveTodos(@PathVariable String username) {
        return todoService.findAllTodosByUsername(username);
    }

    @GetMapping("/users/{username}/todos/{id}")
    public Todo retrieveTodo(@PathVariable String username, @PathVariable Integer id) {
        return todoService.findById(id);
    }

    @DeleteMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodoById(@PathVariable String username, @PathVariable Integer id) {
        todoService.deleteTodoById(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/users/{username}/todos/{id}")
    public Todo updateTodoById(@PathVariable String username, @PathVariable Integer id,
                                               @RequestBody Todo todo) {
        todoService.updateTodoById(todo);
        return todo;
    }

}
