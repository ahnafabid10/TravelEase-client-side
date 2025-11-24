import React, { useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup,  signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from '../FireBase/FireBase.config';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const[user, setUser] = useState(null)
    const[loading, setLoading] = useState(true)

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInGoogle =()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    //signout
    const signOutUser = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    // //update user
    // const updateUser = (updatedData)=>{
    //     setLoading(true)
    //     return updateProfile(auth.currentUser, updatedData)
    // }

    //forget password
    const resetPassword = (email)=>{
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        setLoading(false)
    });
    return ()=>{
        unsubscribe()
    } 

    },[])

    const authInfo ={
        createUser,
        signInUser,
        signInGoogle,
        signOutUser,
        onAuthStateChanged,
        // updateUser,
        resetPassword,
        user,
        loading,


    }
    return <AuthContext value={authInfo}>
        {children}
    </AuthContext>
};

export default AuthProvider;