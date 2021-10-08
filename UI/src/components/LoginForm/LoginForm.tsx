import React, { FormEvent, useState, useRef } from 'react'
import { useHistory } from 'react-router';
import { AuthProvider, useAuth } from '../../contexts/AuthContext';
import { TranslationHelper } from '../../Helpers/TranslationHelper';

export default function LoginForm() {
    const [loading, setLoading] = useState(false);
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
            history.push('/registration');
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
                placeholder = "ttester@examplemail.com"
                ref={emailRef}
            />
            <input type="password"
                required
                placeholder = "Password"
                ref={passwordRef}
                />
            <button
                type="submit"
                name= "sumbit"
                disabled = {loading}
                onChange = {() => setError('')}
                >
                Login
            </button>
            <br/>
            <span>{error}</span>
            <br/>
            <span>Don't have an Account? Sign up!</span>
        </form>
    )
}
