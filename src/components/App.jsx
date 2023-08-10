// import { ContactForm  } from "./ContactForm/ContactForm.jsx";
// import { ContactList } from "./ContactList/ContactList";
// import { FilterComponent } from "./FilterComponent/FilterComponent";
// import { SectionBlock } from "./App.styled.jsx"
import { Route, Routes, NavLink } from "react-router-dom";
import {Login} from "../pages/Login";
import {Register} from "../pages/Register";
import {Contacts} from "../pages/Contacts";
import {NotFound} from "../pages/NotFound";
import { SharedLayout } from "./SharedLayout/SharedLayout.jsx";


export function App(){
  return(
      <Routes> 
          <Route path="/" element={<SharedLayout/> }> 
              <Route path="login" element={<Login/>}/>
              <Route path="register" element={<Register/>}/>
              <Route path="contacts" element={<Contacts/>}/> 
              <Route path="*" element={<NotFound/>}/> 
          </Route> 
      </Routes>
  );
}