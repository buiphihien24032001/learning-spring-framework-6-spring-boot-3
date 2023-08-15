import axios from 'axios';


const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
)

export const retrieveHelloWorldBean = () => apiClient.get('/hello-world-bean')

export const retrieveHelloWorld = () => apiClient.get('/hello-world')

export const retrieveHelloWorldPathVariable = (username) => apiClient.get(`/hello-world/path-variable/${username}`, {
    headers: {
        Authorization: 'Basic SmFtZXM6MTIz'
    }
})

export const executeBasicAuthenticationService = (token) => apiClient.get('/basicauth', {
    headers: {
        Authorization: token
    }
})