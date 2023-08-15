import { createContext, useContext, useState } from "react";
import { executeBasicAuthenticationService } from "../api/HelloWorldApiService";


//1: create context
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext);

//2: Share the created context with other components


function AuthProvider({ children }) {
    //Put some state in the context
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [username, setUsername] = useState(null);
    const [token, setToken] = useState(null);

    function login(username, password) {
        const baToken = 'Basic ' + window.btoa(username + ":" + password);
        const promise  = executeBasicAuthenticationService(baToken);
        console.log(promise);
        try {
            if (promise != null) {
                setAuthenticated(true);
                setUsername(username);
                setToken(baToken);
                console.log(baToken);
                return true;
            } else {
                setAuthenticated(false);
                setUsername(null);
                setToken(null);
                return false;
            }
        } catch (error) {
            setAuthenticated(false);
            setUsername(null);
            setToken(null);
            return false;
        }

    }

    function logout() {
        setAuthenticated(false);
        setUsername(null);
        setToken(null);
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, setAuthenticated, login, logout, username, token}}>
            {children}
        </AuthContext.Provider>
    )
}




export default AuthProvider