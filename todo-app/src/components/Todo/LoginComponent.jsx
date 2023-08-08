import './LoginComponent.css';
import { useState } from "react";
import {useNavigate} from "react-router-dom";



export default function LoginComponent() {
    const [username, setUsername] = useState('jameshien');
    const [password, setPassword] = useState('123');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const navigate = useNavigate();
    function changeUsernameParent(event) {
        setUsername(event.target.value);
    }

    function changePasswordParent(event) {
        setPassword(event.target.value);
    }

    function handleSubmit() {
        if(username==="jameshien" && password==="123"){
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
            navigate(`/welcome/${username}`)
        } else {
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }
    }
    return (
        <div>
            <div className="login-container">
                <div className="circle circle-one"></div>
                <div className="form-container">
                    <img src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png" alt="illustration" className="illustration" />
                    <h1 className="opacity" id='login'>LOGIN</h1>
                    <form>
                        <input type="text" placeholder="USERNAME" name="username" value={username} onChange={changeUsernameParent}/>
                        <input type="password" placeholder="PASSWORD" name="password" value={password} onChange={changePasswordParent}/>
                        <button className="opacity" name="login" onClick={handleSubmit}>SUBMIT</button>
                    </form>
                    {showSuccessMessage && <div className='successMessage'>Authenticated Successfully</div>}
                    {showErrorMessage && <div className='errorMessage'>Authentication Failed. Please check your credentials</div>}
                </div>
                <div className="circle circle-two"></div>
            </div>
            <div className="theme-btn-container"></div>
        </div>
    )
}