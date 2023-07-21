package com.udemy.springboot.myfirstwebapp.todo;

import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class TodoService {

    private static List<Todo> todos = new ArrayList<>();
    private static int todosCount = 0;
    static {
        todos.add(new Todo((long) ++todosCount, "udemy", "Learn Spring Boot 3", LocalDate.now().plusMonths(6), false));
        todos.add(new Todo((long) ++todosCount, "udemy", "Learn AWS", LocalDate.now().plusMonths(3), false));
        todos.add(new Todo((long) ++todosCount, "udemy", "Learn Angular", LocalDate.now().plusMonths(10), false));
    }

    public List<Todo> getAllTodos() {
        return todos;
    }

    public void addTodo(String username, String description, LocalDate targetDate, boolean isDone) {
        Todo todo = new Todo((long) ++todosCount, username, description, targetDate, isDone);
        todos.add(todo);
    }

    public void deleteTodoById(Long id) {
        todos.removeIf(todo -> todo.getId().equals(id));
    }
}
