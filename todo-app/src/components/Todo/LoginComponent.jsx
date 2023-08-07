import './LoginComponent.css';


export default function LoginComponent({username, password, showSuccessMessage, showErrorMessage, changeUsernameParent, changePasswordParent, handleSubmit}) {
    
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
                    <div className='successMessage'>
                        Authenticated Successfully
                    </div>
                    <div className='errorMessage'>
                        Authentication Failed. Please check your credentials
                    </div>
                </div>
                <div className="circle circle-two"></div>
            </div>
            <div className="theme-btn-container"></div>
        </div>
    )
}