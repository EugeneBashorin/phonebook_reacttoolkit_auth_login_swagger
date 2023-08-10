import { ContactForm } from "../components/ContactForm/ContactForm.jsx";
import { FilterComponent } from "../components/FilterComponent/FilterComponent.jsx";
import { ContactList } from "../components/ContactList/ContactList.jsx";

export const Contacts  = () => {
    return(
      <>
        <div className="Container">
        <h1>Phonebook</h1>
        <ContactForm/>
        </div>
        <div className="Container">
        <h2>Contacts</h2>
        <FilterComponent/>
        <ContactList/>
        </div>
      </> 
    )
}