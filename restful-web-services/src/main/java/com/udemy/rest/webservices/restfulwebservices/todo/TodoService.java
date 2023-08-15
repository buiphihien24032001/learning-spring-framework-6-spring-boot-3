package com.udemy.rest.webservices.restfulwebservices.todo;

import java.util.List;

public interface TodoService {

    List<Todo> findAllTodosByUsername(String username);

    Todo findById(Integer id);

    void deleteTodoById(Integer id);

    Todo updateTodoById(TodoDto dto);

    Todo createNewTodo(Todo todo);
}
