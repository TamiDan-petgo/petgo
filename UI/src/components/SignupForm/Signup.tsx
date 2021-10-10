import React, { useRef, useState, FormEvent, useEffect } from 'react'
import './Signup.scss';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { UserHelper } from '../../Helpers/UserHelper';

interface SignUpFormProps {
    passwordNotEqualError: string, 
    emailPlaceholder: string, 
    passwordPlaceholder: string, 
    passwordConfirmationPlaceholder: string,
    signupButtonPlaceholder : string, 
    alreadyHaveAnAccount: string, 
    loginLinkText: string
}

/**
 * Create Component for Signup form.
 * @returns JSX.Element
 */
 const Signup: React.FC<SignUpFormProps> = ({emailPlaceholder, passwordPlaceholder, passwordConfirmationPlaceholder, passwordNotEqualError, signupButtonPlaceholder, alreadyHaveAnAccount, loginLinkText}) => {
    const emailRef : any = useRef();
    const passwordRef : any = useRef();
    const passwordConfirmationRef : any = useRef();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const {signup, isCurrentUser, currentUser} = useAuth();
    const history = useHistory();
    const [test, setTest] = useState("");
    const [user, setUser] = useState("");

    useEffect(() => {
        if(isCurrentUser() && user == "") {
            UserHelper.getQuestionaire(currentUser).then((data: object) => {
                setTest(JSON.stringify(data));
                setUser(JSON.stringify(data));
            }).catch((err: string) => {
                history.push('/questionaire');
            });
        }
    });

    async function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        setError('');
        if(passwordRef.current.value !== passwordConfirmationRef.current.value) {
            setError(passwordNotEqualError);
            return;
        }
        try {
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push('/questionaire');
        }
        catch(ex : any) {
            setError('error: ' + "\n" + ex);
        }
        setLoading(false);
    }

    return (
        <form className="signup"
            onSubmit = {(e) => handleSubmit(e)}>
            <h1>{test}</h1>
            <input type="email" 
                name="email"
                required 
                ref={emailRef}
                placeholder={emailPlaceholder}
            />
            <input type="password"
                name="password"
                required
                ref={passwordRef}
                placeholder = {passwordPlaceholder}
                onChange = {() => setError('')}
            />
            <input type="password"
                name="passwordConfirmation"
                required
                ref={passwordConfirmationRef}
                placeholder = {passwordConfirmationPlaceholder}
                onChange = {() => setError('')}
            />
            <span id="error">{error}</span>
            <button
                type="submit"
                disabled = {loading}
            >
                {signupButtonPlaceholder}
            </button>

            <div>
                <span>{alreadyHaveAnAccount} <Link to="/login">{loginLinkText}!</Link></span>
            </div>
        </form>
    )
}

export default Signup;

