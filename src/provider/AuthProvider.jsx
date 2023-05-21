import React, { createContext, useEffect, useState } from 'react';
import App from '../App';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const[loading,setLoading] = useState(true);
    

    const createUser = (email, password) => {
         setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email,password)=>{
        setLoading(true)
         return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
           // console.log('logged in user inside auth state observer', loggedUser)
            setUser(loggedUser);
           // setPhoto(photourl);
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    }, [])
    const authInfo = {
        user,
       
        loading,
        createUser,
        signIn,
        logOut
   }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;