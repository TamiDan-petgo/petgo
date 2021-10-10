import { createUserWithEmailAndPassword, signInWithEmailAndPassword, User } from '@firebase/auth';
import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase';
import { FirebaseError } from '@firebase/util';
import { EnumFirebaseAuthError } from '../Enums/EnumFirebaseAuthError';
import { useHistory } from 'react-router';

/**
 * AuthContext for Firebase Auth
 */
const AuthContext : React.Context<any> = React.createContext<any>(null);

/**
 * getContext
 * @returns Context of AuthContext
 */
export function useAuth(){
    return useContext(AuthContext);
}

/**
 * AuthProviderComponent
 * @param children
 * @returns AuthProvider
 */
export function AuthProvider({ children } : any) {
    const history = useHistory();
    const [currentUser, setCurrentUser] = useState<User | null>();
    const [loading, setLoading] = useState(true);

    /**
     * Login with Firebase
     * @param email email of user
     * @param password password of user
     * @returns Promise<void>
     */
    function login(email: string, password: string) : Promise<void> {
        return signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            setCurrentUser(userCredential.user);
        });
    }

    /**
     * Sign up to Firebase
     * @param email email of User
     * @param password password of user
     * @returns Promise<void>
     */
    function signup (email : string, password : string): Promise<void> {
        return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setCurrentUser(userCredential.user);
        }).catch((err: FirebaseError) => {
            switch(err.code) {
                case EnumFirebaseAuthError.EmailAlreadyInUse: 
                    history.push('/login');
                    break;
                default: break;
            }
        });
    }

    /**
     * Is there a current User?
     * @returns if there's a current user
     */
    function isCurrentUser() : boolean {
        if(!loading && currentUser?.uid != null)
            return true;
        return false;
    }
    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, [])

    /**
     * returning object 
     */
    const returning : object = {
        currentUser, 
        login,
        signup, 
        isCurrentUser 
    }
    
    /**
     * AuthContext.Provider
     */
    return (
        <AuthContext.Provider value = { returning }>
            {!loading && children}
        </AuthContext.Provider>
    )
}
