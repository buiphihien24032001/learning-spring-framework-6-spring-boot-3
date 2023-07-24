package com.udemy.springboot.myfirstwebapp.todo;

import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class TodoService {

    private static List<Todo> todos = new ArrayList<>();
    private static int todosCount = 0;
    static {
        todos.add(new Todo((long) ++todosCount, "admin", "Learn Spring Boot 3", LocalDate.now().plusMonths(6), false));
    }

    public void addTodo(String username, String description, LocalDate targetDate, boolean isDone) {
        Todo todo = new Todo((long) ++todosCount, username, description, targetDate, isDone);
        todos.add(todo);
    }

    public void deleteTodoById(Long id) {
        todos.removeIf(todo -> todo.getId().equals(id));
    }

    public Todo findById(Long id) {
        Todo todo = todos.stream().filter(todo1 -> todo1.getId().equals(id)).findFirst().get();
        return todo;
    }

    public void updateTodo(Todo todo) {
        deleteTodoById(todo.getId());
        todos.add(todo);
    }

    public List<Todo> findByUsername(String username) {
        return todos.stream().filter(item -> item.getUsername().equalsIgnoreCase(username)).collect(Collectors.toList());
    }
}
