import { useDispatch } from "react-redux";
import { register } from "redux/auth/operation";


export const Register = () => {
    const dispatch = useDispatch();
    
    const handleRegisterFormSubmit = event =>{
        event.preventDefault();
        const form = event.currentTarget;
        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        )
        form.reset();
    }
    return(
        <div> 
            <h2>Register</h2>
            <p>ioptyu ioptyu@mail.com ioptyuMail124com</p>
            <form name="registerForm" autoComplete="off" onSubmit={handleRegisterFormSubmit}>
                <input type="text" name="name" placeholder="name"></input>
                <input type="email" name="email" placeholder="email"></input>
                <input type="password" name="password" placeholder="password"></input>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}