import {Link} from "react-router-dom";

export default function LogoutComponent() {
    return (
        <div className="logout">
            <h1>You are logged out!</h1>
            <h4>Do you want to - <Link to="/">login again</Link></h4>
        </div>
    )
}