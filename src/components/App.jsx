// import { ContactForm  } from "./ContactForm/ContactForm.jsx";
// import { ContactList } from "./ContactList/ContactList";
// import { FilterComponent } from "./FilterComponent/FilterComponent";
// import { SectionBlock } from "./App.styled.jsx"
import {lazy, useEffect} from "react";
import { Route, Routes } from "react-router-dom";

import {NotFound} from "../pages/NotFound";
import { SharedLayout } from "./SharedLayout/SharedLayout.jsx";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import { refreshUser } from "../redux/auth/operation";
import { useDispatch } from "react-redux";
import { useAuth } from "hooks/useAuth";

const LoginPage = lazy(() => import('../pages/Login'));
const RegisterPage = lazy(() => import('../pages/Register'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export function App(){
  const dispatch = useDispatch();
  const{isRefreshing} = useAuth();

  useEffect(()=>{
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (<b>Refreshing user ...</b>) : (
      <Routes> 
          <Route path="/" element={<SharedLayout/> }> 
              <Route 
                path="login" 
                element={
                    <RestrictedRoute redirectTo="/contacts" component={<LoginPage/>}/>
                }
              />
              <Route 
                path="register"
                element={
                    <RestrictedRoute redirectTo="/contacts" component={<RegisterPage/>}/>
                }
               />
              <Route 
                path="contacts"
                element={
                    <PrivateRoute redirectTo="/login" component={<ContactsPage/>}/>
                }
               /> 
              <Route path="*" element={<NotFound/>}/> 
          </Route> 
      </Routes>
  );
}