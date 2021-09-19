import React, { MutableRefObject, useRef, useState, FormEvent } from 'react'
import './Signup.scss';
import { AuthProvider, useAuth } from '../../contexts/AuthContext';
import BackgroundContainer from '../BackgroundContainer/BackgroundContainer';

/**
 * Create Component for Signup form.
 * @returns JSX.Element
 */
export default function Signup() : JSX.Element {
    const emailRef : any = useRef();
    const passwordRef : any = useRef();
    const passwordConfirmationRef : any = useRef();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const {signup} = useAuth();

    async function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        setError('');
        if(passwordRef.current.value !== passwordConfirmationRef.current.value) {
            setError("passwords need to be the same!");
            return;
        }

            try {
                setLoading(true);
                await signup(emailRef.current.value, passwordRef.current.value);
            }
            catch(ex : any) {
                setError(error + "\n" + ex);
            }
        setLoading(false);
    }

    return (
        <form className="signup"
            onSubmit = {(e) => handleSubmit(e)}>
            <input type="email" 
                name="email"
                required 
                ref={emailRef}
                placeholder="ttester@examplemail.com"
            />
            <input type="password"
                name="password"
                required
                ref={passwordRef}
                placeholder = "password"
                onChange = {() => setError('')}
            />
            <input type="password"
                name="passwordConfirmation"
                required
                ref={passwordConfirmationRef}
                placeholder = "password confirmation"
                onChange = {() => setError('')}
            />
            <span id="error">{error}</span>
            <button
                type="submit"
                disabled = {loading}
            >
                Submit
            </button>

            <div>
                <span>Already have an Account? Sign In!</span>
            </div>
        </form>
    )
}

