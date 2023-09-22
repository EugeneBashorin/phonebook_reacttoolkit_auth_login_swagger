import { useState } from "react";
import { useGetUsersQuery, useDeleteUserMutation, useEditUserMutation } from "../../redux/contacts/userSlice";
import Modal from "../Modal/Modal.js";
import EditContactForm from "../EditContactForm/EditContactForm.jsx";

export const ContactItem = ({contactData}) => {
    const{id, name, number} = contactData;
    const [deleteUser, resultStatusInfo] = useDeleteUserMutation();
    const[isOpen, setIsOpen] = useState(false);
    const[isModalActive, setIsModalActive]=useState(false);
    const onOpenModal = (event) => {
        event.preventDefault();
        setIsModalActive(!isModalActive)
    }
    const onCloseModal = (event) => {
        setIsModalActive(false);
    }
     
    const [nameData, setNameData] = useState(name);
    const [numberData, setNumberData] = useState(number);

    const [editUser, resultFetchInfo] = useEditUserMutation();

    return(
        <li key={id}>
            {name} : {number} 
            <button type="button" onClick={()=>setIsModalActive(true)}>Edit</button>
            <button type="button" onClick={()=>deleteUser(id)}>Delete</button>
            {isModalActive && (
                <Modal onClose={onCloseModal}>
                  <EditContactForm userContact={contactData}/>
                </Modal>)
                }
        </li>
    )
}