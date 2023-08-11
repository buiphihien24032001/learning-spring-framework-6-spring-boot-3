import { createContext, useContext, useState } from "react";


//1: create context
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext);

//2: Share the created context with other components


function AuthProvider({children}) {
    //Put some state in the context
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [username, setUsername] = useState(null);

    function login(username, password) {
        if(username==="James" && password==="123"){
            setAuthenticated(true)
            setUsername(username)
            return true
        } else {
            setAuthenticated(false)
            setUsername(null)
            return false
        }
    }

    function logout(){
        setAuthenticated(false)
    }
    
    return (
        <AuthContext.Provider value={{ isAuthenticated, setAuthenticated, login, logout, username}}>
            {children}
        </AuthContext.Provider>
    )
}




export default AuthProvider