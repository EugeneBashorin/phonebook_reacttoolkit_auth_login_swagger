import { UserMenu } from "../../components/UserMenu/UserMenu.jsx";
import { NavLink, Outlet } from "react-router-dom";

export const SharedLayout = () => {
    return(
        <div>
            <nav>
                <ul>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/register">Register</NavLink></li>
                    <li><NavLink to="/contacts">User</NavLink></li>
                </ul>      
                <UserMenu/>
            </nav>
            <Outlet/>
        </div>
    )
}