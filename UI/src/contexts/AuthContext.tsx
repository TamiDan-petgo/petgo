import { setUserId } from '@firebase/analytics';
import { createUserWithEmailAndPassword, getAuth, User } from '@firebase/auth';
import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase';
import firebase from 'firebase/app';

const AuthContext : React.Context<any> = React.createContext<any>(null);

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({ children } : any) {
    const [currentUser, setCurrentUser] = useState<User | null>();

    function signup (email : string, password : string): Promise<void> {
        return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setCurrentUser(userCredential.user);
        });
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
        });
        return unsubscribe;
    }, [])

    const returning : object = {
        currentUser, 
        signup 
    }
    
    return (
        <AuthContext.Provider value = { returning }>
            {children}
        </AuthContext.Provider>
    )
}
