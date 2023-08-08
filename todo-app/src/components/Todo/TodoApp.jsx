import { BrowserRouter, Route, Routes} from "react-router-dom";
import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent";
import ErrorComponent from "./ErrorComponent";
import ListTodoComponent from "./ListTodoComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import LogoutComponent from "./LogoutComponent";

export default function TodoApp() {  
    return (
        <div className="TodoApp">
            <HeaderComponent/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginComponent/>}/>
                    <Route path="/login" element={<LoginComponent/>}/>
                    <Route path="/welcome/:username" element={<WelcomeComponent/>}/>
                    <Route path="*" element={<ErrorComponent/>}/>
                    <Route path="/logout" element={<LogoutComponent/>}/>
                    <Route path="/todos" element={<ListTodoComponent/>}/>
                </Routes>
            </BrowserRouter>
            <FooterComponent/>
        </div>
    )
}

