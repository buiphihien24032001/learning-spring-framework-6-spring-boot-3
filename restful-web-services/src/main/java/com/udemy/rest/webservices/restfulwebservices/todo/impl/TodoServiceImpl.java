package com.udemy.rest.webservices.restfulwebservices.todo.impl;

import com.udemy.rest.webservices.restfulwebservices.todo.Todo;
import com.udemy.rest.webservices.restfulwebservices.todo.TodoDto;
import com.udemy.rest.webservices.restfulwebservices.todo.TodoRepository;
import com.udemy.rest.webservices.restfulwebservices.todo.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoServiceImpl implements TodoService {

    @Autowired
    private TodoRepository todoRepository;

    @Override
    public List<Todo> findAllTodosByUsername(String username) {
        return todoRepository.findAllByUsername(username);
    }

    @Override
    public Todo findById(Integer id) {
        return todoRepository.findById(id).get();
    }

    @Override
    public void deleteTodoById(Integer id) {
        todoRepository.deleteById(id);
    }

    @Override
    public Todo updateTodoById(TodoDto todoDto) {
        Todo todo = new Todo(todoDto);
        return todoRepository.save(todo);
    }

    @Override
    public Todo createNewTodo(Todo todo) {
        Todo todoCreated = todoRepository.save(todo);
        return todoCreated;
    }
}
