// import { useAuth } from "../../hooks/useAuth.js";
// import { UserMenu } from "../../components/UserMenu/UserMenu.jsx";
import { NavLink, Outlet } from "react-router-dom";
// import { AuthNav } from "../AuthNav/AuthNav.jsx";
import { AppBar } from "../../components/AppBar/AppBar.jsx";
import { Suspense } from "react";

export const SharedLayout = () => {
    return(
        <div>
            <AppBar/>
            <Suspense fallback={null}>
                <Outlet/>
            </Suspense>
        </div>
    )
}