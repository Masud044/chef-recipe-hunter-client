import React, { createContext } from 'react';
import App from '../App';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const user = null;
    

    const createUser = (email, password) => {
        
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email,password)=>{
         return signInWithEmailAndPassword(auth,email,password);
    }
    const authInfo = {
        user,
        createUser,
        signIn
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