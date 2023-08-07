import { useState } from "react";
import LoginComponent from "./LoginComponent";

export default function TodoApp() {
    const [username, setUsername] = useState('jameshien');
    const [password, setPassword] = useState('123');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
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
        } else {
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }
    }
    
    return (
        <div className="TodoApp">
            <LoginComponent 
                username={username} 
                password={password} 
                showSuccessMessage={showSuccessMessage}
                showErrorMessage={showErrorMessage}
                changeUsernameParent={changeUsernameParent}
                changePasswordParent={changePasswordParent}
                handleSubmit={handleSubmit}/>
        </div>
    )
}
