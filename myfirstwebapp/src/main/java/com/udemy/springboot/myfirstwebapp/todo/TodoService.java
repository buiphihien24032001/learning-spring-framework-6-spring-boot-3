package com.udemy.springboot.myfirstwebapp.todo;

import com.udemy.springboot.myfirstwebapp.ApplicationEvent.DataModifiedEvent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TodoService {

    @Autowired
    private TodoRepository todoRepository;

    private static List<Todo> todos = new ArrayList<>();
    private static int todosCount = 0;
    private final ApplicationEventPublisher eventPublisher;

    public TodoService(TodoRepository todoRepository, ApplicationEventPublisher eventPublisher) {
        this.todoRepository = todoRepository;
        this.eventPublisher = eventPublisher;
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

    public void saveRecord(Todo todo) {
        todoRepository.save(todo);
        eventPublisher.publishEvent(new DataModifiedEvent(this));
    }

    public void deleteTodoByIdWithJpa(Long id) {
        todoRepository.deleteById(id);
        eventPublisher.publishEvent(new DataModifiedEvent(this));
    }

    public void updateTodoWithJpa(Todo todo) {
        todoRepository.save(todo);
    }
}
