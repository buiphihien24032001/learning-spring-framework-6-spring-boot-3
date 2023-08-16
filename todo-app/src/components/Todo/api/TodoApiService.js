import { apiClient } from './ApiClient';

export const retrieveTodosByUsername
    = (username) => apiClient.get(`/users/${username}/todos`)
export const retrieveTodo
    = (username, id) => apiClient.get(`/users/${username}/todos/${id}`)
export const deleteTodoById
    = (username, id) => apiClient.delete(`/users/${username}/todos/${id}`)
export const updateTodo
    = (username, id, todo) => apiClient.put(`/users/${username}/todos/${id}`, todo)
export const createTodo
    = (username, todo) => apiClient.post(`/users/${username}/todos`, todo)
