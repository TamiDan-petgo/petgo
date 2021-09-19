import { setUserId } from '@firebase/analytics';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, User } from '@firebase/auth';
import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase';
import firebase from 'firebase/app';

const AuthContext : React.Context<any> = React.createContext<any>(null);

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({ children } : any) {
    const [currentUser, setCurrentUser] = useState<User | null>();
    const [loading, setLoading] = useState(true);

    function login(email: string, password: string) : Promise<void> {
        return signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            setCurrentUser(userCredential.user);
        });
    }

    function signup (email : string, password : string): Promise<void> {
        return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setCurrentUser(userCredential.user);
        });
    }

    function isLoggedInUser () : Boolean {
        return (!loading && currentUser) ? true : false;
    }
    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, [])

    const returning : object = {
        currentUser, 
        login,
        signup 
    }
    
    return (
        <AuthContext.Provider value = { returning }>
            {!loading && children}
        </AuthContext.Provider>
    )
}
