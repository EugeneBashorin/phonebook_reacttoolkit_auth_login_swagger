import PropTypes from 'prop-types';
import React, { useEffect, useState } from "react";
import {ListElement, ListItem, Button, BtnWrapper} from "./ContactList.styled.jsx"
import { useSelector} from "react-redux";
import { getFilterData } from "../../redux/contacts/selectors"
import { useGetUsersQuery } from "../../redux/contacts/userSlice"; 
import {getFilteredUsersList} from "./Operations.js";
import { ContactItem } from '../ContactItem/ContactItem.jsx';

export const ContactList = () => {
const { data, error, isLoading } = useGetUsersQuery();
const namesList = data;
const filterValue = useSelector (getFilterData);

// useEffect(()=>{
//     const { data, error, isLoading } = useGetUsersQuery();
// },[data, isLoading]);

const filteredUsers = getFilteredUsersList(namesList, filterValue);
    return (
    <>
    {isLoading? (<b>Loading...</b>):(
        <ListElement>
            {filteredUsers.map( contact => (
                
                <ContactItem key={contact.id} contactData={contact}/>
            ))}
        </ListElement>)}
    </>
    )
}
ContactList.propTypes = {
    key: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.number,
}