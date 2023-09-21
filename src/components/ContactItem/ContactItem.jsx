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
        // event.preventDefault();
        setIsModalActive(false);
    }

    // const [formData, setFormData] = useState({
    //     name: "",
    //     number: ""
    //   });

    // const [title, setTitle] = useState("");
    // const [body, setBody] = useState("");
     
    const [nameData, setNameData] = useState(name);
    const [numberData, setNumberData] = useState(number);

    const [editUser, resultFetchInfo] = useEditUserMutation();

    // const handleEditUserFormSubmit = (event) => {
    //     event.preventDefault();
    //     const form = event.currentTarget;
    //     const values = {id:id, name: form.elements.name.value, number: form.elements.number.value}
    //     console.log(values);
    //     try {
    //       editUser(values);
    //     } catch (error) {
    //         console.log(error);
    //     }
    //     form.reset();
    // }

    // const handleChange = (event) =>{
    //     event.preventDefault();  
    //     console.log("before", nameData)
    //     if(event.target.name === "name"){
    //         console.log("name!", event.target.value, typeof(event.target.value))
    //       setNameData( () => ({
    //         nameData: event.target.value
    //         })
    //       )
    //       console.log("after", nameData)
    //     }
    //     if(event.target.name === "number"){
    //         console.log("number!", event.target.value)
    //       setNumberData( (prevState) => ({
    //         ...prevState, [event.target.name]: event.target.value
    //       })
    //     )
    //     }
    //     return;
    //   }

    return(
        <li key={id}>
            {name} : {number} 
            <button type="button" onClick={()=>setIsModalActive(true)}>Edit</button>
            <button type="button" onClick={()=>deleteUser(id)}>Delete</button>

            {/* <form name="editUserForm" autoComplete="off" onSubmit={handleEditUserFormSubmit}>
                <hr/>
                <span>Contact name<br/>
                    <textarea name="name" onChange={handleChange}/>
                </span><br/>
                <span>Phone number<br/>
                    <textarea name="number" onChange={handleChange}/>
                </span><br/>
                <button type="submit">Accept</button>
                <hr/>
            </form> */}

            {isModalActive && (
                <Modal onClose={onCloseModal}>
                  <EditContactForm userContact={contactData}/>
                </Modal>)
                }
        </li>
    )
}
/*{ children, isOpen, handleClose }*/