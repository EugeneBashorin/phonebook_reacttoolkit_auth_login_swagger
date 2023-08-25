import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operation";
import { useAuth } from "../../hooks/useAuth.js";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const {user} = useAuth();

    return(
        <>
            <p>Welcome, {user.name} {user.email}</p>
            <button type="button" onClick={()=>dispatch(logout())}>Logout</button>
        </>
    )
}