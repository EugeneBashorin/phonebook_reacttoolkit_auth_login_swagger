import { UserMenu } from "../UserMenu/UserMenu.jsx";
import { useAuth } from "../../hooks/useAuth.js"
import { AuthNav } from "../AuthNav/AuthNav.jsx";
import { Navigation } from "../Navigation/Navigation.jsx";


export const AppBar = () => {
const {isLoggedIn} = useAuth();
    
    return(
        <>
        <Navigation/>
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}
        </>
    )
}