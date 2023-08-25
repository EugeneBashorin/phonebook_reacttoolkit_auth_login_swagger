import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const Navigation = () => {
    const{isLoggedIn} = useAuth();

    return(
        <nav>
            {isLoggedIn && (
                <NavLink to="/contacts">Contacts</NavLink>
                )
            }
        </nav>
    )
}