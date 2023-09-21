import styled from "@emotion/styled";
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from "react";
import {LabelEl, LabelElFavorite, Button} from "./ContactForm.styled.jsx"
import * as Yup from 'yup';
import { useAddUsersMutation } from "../../redux/contacts/userSlice";

const Input = styled(Field)`
    width: 150px;
`
const FormTag = styled(Form)`
    width: 350px;
`

const nameErrorMessage = "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
const phoneErrorMessage = "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +";

const schema = Yup.object({
    name: Yup.string()
                .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, nameErrorMessage)
                .required('Required'),

    number: Yup.string()
                .required('Required')
                .matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, phoneErrorMessage),
})

const initialValues = {
    name:'',
    number:'',
}

export const ContactForm = () => { 
    const [addUsers, resultFetchInfo] = useAddUsersMutation();
    const handleSubmit = (values, action) => {
        try {
         addUsers(values);
        } catch (error) {
            console.log(error);
        }
        action.resetForm();
    }
    return(
    <>  
        <Formik
              initialValues={initialValues}  
              validationSchema={schema}
              onSubmit={handleSubmit}
            >   
        {({values, handleChange})  =>  
            (<FormTag> 
                <fieldset>
                    <LabelEl>
                        Name
                        <Input type="text" name="name" value={values.name} onChange={handleChange}/>
                        <ErrorMessage component="div" name="name"/>
                    </LabelEl>
                    <LabelEl>
                        Number
                        <Input type="tel" name="number" value={values.number} onChange={handleChange} />
                            <ErrorMessage component="div" name="number"/>
                    </LabelEl>
                    <Button type="submit">Add contact</Button> 
                </fieldset>
            </FormTag>)}
        </Formik>
    </>
    )
}

ContactForm.propTypes = {
    name: PropTypes.string,
    number: PropTypes.number,
}