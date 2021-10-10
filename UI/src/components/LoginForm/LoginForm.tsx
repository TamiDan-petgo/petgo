import { FormEvent, useState, useRef} from 'react'
import { useHistory } from 'react-router';
import {useAuth } from '../../contexts/AuthContext';
import {Link} from 'react-router-dom';

interface LoginFormProps {
    emailPlaceholder: string, 
    passwordPlaceholder: string, 
    loginButton: string, 
    notYetRegistered: string, 
    signUpLinkText: string
}
/***
 * Get the Login Form
 */
const LoginForm: React.FC<LoginFormProps> = ({emailPlaceholder, passwordPlaceholder, loginButton, notYetRegistered, signUpLinkText}) => {
    const [loading, setLoading] = useState(true);
    const[error, setError] = useState('');
    const emailRef : any = useRef();
    const passwordRef : any = useRef();
    const {login} = useAuth();
    const history = useHistory();

    async function handleSubmit(e : FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError('');
        try {
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            history.push('/');
        }
        catch(ex : any) {
            setError(ex.toString());
        }
        setLoading(false);
    }

    return (
        <form className="login"
                onSubmit = {(e) => handleSubmit(e)}>
                    <input
                        type = "email"
                        required
                        placeholder = {emailPlaceholder}
                        ref={emailRef}
                    />
                    <input type="password"
                        required
                        placeholder = {passwordPlaceholder}
                        ref={passwordRef}
                        />
                    <button
                        type="submit"
                        name= "sumbit"
                        disabled = {loading}
                        onChange = {() => setError('')}
                        >
                        {loginButton}
                    </button>
                    <br/>
                    <span>{error}</span>
                    <br/>
                    <span>{notYetRegistered} <Link to="/signup">{signUpLinkText}</Link></span>
                </form>
    )
}

export default LoginForm;
