import axios from 'axios';


const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
)

export const retrieveTodosByUsername = (username) => apiClient.get(`/users/${username}/todos`)
export const retrieveTodo = (username, id) => apiClient.get(`/users/${username}/todos/${id}`)
export const deleteTodoById = (username, id) => apiClient.delete(`/users/${username}/todos/${id}`)
export const getTodoById = (username, id) => apiClient.post(`/users/${username}/todos/${id}`)

