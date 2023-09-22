import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operation";
import { useAuth } from "../../hooks/useAuth.js";
import { ContactForm } from "../ContactForm/ContactForm.jsx";
import { FilterComponent } from "../FilterComponent/FilterComponent.jsx";
import Modal from "../Modal/Modal.js";
import { useState } from "react";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const {user} = useAuth();

    const[isModalActive, setIsModalActive]=useState(false);
    const onCloseModal = (event) => {
        setIsModalActive(false);
    }

    const[isFinderlActive, setIsFinderlActive]=useState(false);
    const onActiveFinderField = (event) => {
      setIsFinderlActive(true);
    }
    const onCloseFinderField = (event) => {
      setIsFinderlActive(false);
    }

    return(
        <>
            <ul>
                <li>
                    <ul>
                        <li>Hi, {user.name}</li>
                        <li>{user.email}</li>
                    </ul>
                    <button type="button" onClick={()=>dispatch(logout())}>Logout</button>
                </li>
                <li>
                <button type="button" onClick={()=>setIsModalActive(true)}>AddUser</button>
            {isModalActive && (
                <Modal onClose={onCloseModal}> <ContactForm/> </Modal>)
                }
                </li>
                <li>
            <button type="button" onClick={()=>setIsFinderlActive(true)}>Find Icon</button> 
            {isFinderlActive && (
                <FilterComponent onClose={onCloseFinderField}/>)
                }   
                </li>
            </ul>
        </>
    )
}