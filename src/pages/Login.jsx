import { useDispatch } from "react-redux";
import { login } from "redux/auth/operation.js";

export const Login = () => {
    const dispatch = useDispatch();

    const handleLoginFormSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        dispatch(
            login({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        )
        form.reset();
    }
    return(
        <div>
            <h2>Login</h2>
            <p>ioptyu@mail.com ioptyuMail124com</p>
            <form name="loginForm" autoComplete="off" onSubmit={handleLoginFormSubmit}>
                <input type="email" name="email" placeholder="email"></input>
                <input type="password" name="password" placeholder="password"></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}