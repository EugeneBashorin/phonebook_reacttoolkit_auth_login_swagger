import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operation";
import { useAuth } from "../../hooks/useAuth.js";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const {user} = useAuth();

    return(
        <>
        <ul>
            <li>
                Hi, {user.name} {user.email}
                <button type="button" onClick={()=>dispatch(logout())}>Logout</button>
            </li>
            <li>
                <button type="button">Add</button>
                </li>
            <li>
                <button type="button">Find</button>
            </li>
        </ul>
            {/* <p>Hi, {user.name} {user.email}</p>
            <button type="button" onClick={()=>dispatch(logout())}>Logout</button> */}
        </>
    )
}