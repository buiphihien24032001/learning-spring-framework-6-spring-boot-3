import {Link, useParams} from "react-router-dom";
import './css/WelcomeComponent.css'
import { useState } from "react";
import {retrieveHelloWorldBean, retrieveHelloWorld, retrieveHelloWorldPathVariable} from "./api/HelloWorldApiService";
import { useAuth } from "./security/AuthContext";

export default function WelcomeComponent() {
    const {username} =  useParams()
    const [message, setMessage] =  useState(null)
    const authContex = useAuth();
    const token = authContex.token;

    function callHelloWorldRestApi() {
        retrieveHelloWorld().then(
            (response) => successfulResponse(response)
        ).catch(
            (error) => errorResponse(error)
        ).finally (
            () => console.log('clean up')
        )
    }

    function callHelloWorldBeanRestApi() {
        retrieveHelloWorldBean().then(
            (response) => successfulResponseMessage(response)
        ).catch(
            (error) => errorResponse(error)
        ).finally (
            () => console.log('clean up')
        )
    }

    function callHelloWorldPathVariableRestApi() {
        retrieveHelloWorldPathVariable('James', token).then(
            (response) => successfulResponseMessage(response)
        ).catch(
            (error) => errorResponse(error)
        ).finally (
            () => console.log('clean up')
        )
    }

    function successfulResponse(response) {
        console.log(response)
        setMessage(response.data)
    }

    function successfulResponseMessage(response) {
        console.log(response)
        setMessage(response.data.message)
    }

    function errorResponse(error) {
        console.log(error)
    }

    return (
        <div className="Welcome">
            <h1>Welcome {username} to my website</h1>
            <div>
                Manage your todos - <Link to="/todos">Go here</Link>
            </div>
            <button className="btn btn-success mt-5" onClick={callHelloWorldRestApi} >Call hello world</button>
            <button className="btn btn-info mt-5 " onClick={callHelloWorldBeanRestApi} >Call hello world Bean</button>
            <button className="btn btn-warning mt-5 " onClick={callHelloWorldPathVariableRestApi} >Call hello world path variable</button>
            <div className="text-info mt-5">{message}</div>
        </div>
    )
}