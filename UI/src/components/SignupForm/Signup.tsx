import React, { MutableRefObject, useRef } from 'react'
import './Signup.scss';
import { AuthProvider, useAuth } from '../../contexts/AuthContext';

/**
 * Create Component for Signup form.
 * @returns JSX.Element
 */
export default function Signup() : JSX.Element {
    const emailRef : any = useRef();
    const passwordRef : any = useRef();
    const passwordConfirmationRef : any = useRef();
    const {signup} = useAuth();

    function handleSubmit(e: Event){
        e.preventDefault();
        signup(emailRef.current.value, passwordRef.current.value);
    }

    return (
        <form className="signup">
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
            />
            <input type="password"
                name="passwordConfirmation"
                required
                ref={passwordConfirmationRef}
                placeholder = "password confirmation"
            />
            <button
                type="submit"
            >
                Submit
            </button>

            <div>
                <span>Already have an Account? Sign In!</span>
            </div>
        </form>
    )
}

