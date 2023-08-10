import {Link, useParams} from "react-router-dom";
import './css/WelcomeComponent.css'
import axios from 'axios';
import { useState } from "react";

export default function WelcomeComponent() {
    const {username} =  useParams()

    const [message, setMessage] =  useState(null)
    function callHelloWorldRestApi() {
        axios.get('http://localhost:8080/hello-world').then(
            (response) => successfulResponse(response)
        ).catch(
            (error) => errorResponse(error)
        ).finally (
            () => console.log('clean up')
        )
    }

    function callHelloWorldBeanRestApi() {
        axios.get('http://localhost:8080/hello-world-bean').then(
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
            <div className="text-info mt-5">{message}</div>
        </div>
    )
}