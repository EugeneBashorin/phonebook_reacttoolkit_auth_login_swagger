import { useEditUserMutation } from "redux/contacts/userSlice";
import { Formik, Form, Field, ErrorMessage } from 'formik';

const EditContactForm = ({userContact}) => {
  const {id, name, number} = userContact;
  const [editUser, resultFetchInfo] = useEditUserMutation();

  const initialValues = {
    id: id,
    name: name,
    number: number,
  }

const handleSubmit = (values, action) => {
  try {
   editUser(values);
  } catch (error) {
      console.log(error);
  }
  action.resetForm();
}

  return(
    <div>
      <p>EDIT CONTACT</p>

      <Formik
              initialValues={initialValues}  
              // validationSchema={schema}
              onSubmit={handleSubmit}
            >   
        {({values, handleChange})  =>  
            (<div> 
                <Form id={id}>
                    <label>
                        Name
                        <input type="text" name="name" value={values.name} onChange={handleChange}/>
                        {/* <ErrorMessage component="div" name="name"/> */}
                    </label>
                    <label>
                        Number
                        <input type="tel" name="number" value={values.number} onChange={handleChange} />
                            {/* <ErrorMessage component="div" name="number"/> */}
                    </label>
                    <button type="submit">Edit contact</button> 
                </Form>
            </div>)}
        </Formik>
    </div>
  );
};

export default EditContactForm;