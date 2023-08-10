import './css/HeaderComponent.css'
import {Link} from "react-router-dom";
import { useAuth } from './security/AuthContext';


export default function HeaderComponent() {

    const authContext = useAuth();
    const isAuthenticated = authContext.isAuthenticated

    return (
        <div className="header">
           <header className="border-bottom border-light border-1 mb-0 p-2">
                <div className="headerContainer">
                    <div className="row">
                        <nav className="navbar navbar-expand-lg">
                            <Link className="navbar-brand ms-2 fs-2 fw-bold text-white" to="/welcome/in28minutes">Todo Management</Link>
                            <div className="collapse navbar-collapse">
                                <ul className="navbar-nav">
                                    {isAuthenticated && <li className="nav-item fs-5"><Link className="nav-link text-white" to={`/welcome/hienbui`}>Home</Link></li>}  
                                    {isAuthenticated && <li className="nav-item fs-5"><Link className="nav-link text-white" to="/todos">Todos</Link></li>}
                                </ul>
                             </div>
                            <ul className="navbar-nav">
                                {!isAuthenticated && <li className="nav-item fs-5"><Link className="nav-link text-white" to="/login">Login</Link></li>}
                                {isAuthenticated && <li className="nav-item fs-5"><Link className="nav-link text-white" to="/logout" onClick={authContext.logout}>Logout</Link></li>}    
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    )
}