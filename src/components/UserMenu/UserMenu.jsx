import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operation";

export const UserMenu = () => {
    const dispatch = useDispatch();

    return(
        <>
            <p>ioptyu@mail.com</p>
            <button type="button" onClick={()=>dispatch(logout())}>Logout</button>
        </>
    )
}