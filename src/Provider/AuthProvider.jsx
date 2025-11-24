import React, { useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { onAuthStateChanged, signInWithPopup,  signInWithEmailAndPassword, signOut, sendPasswordResetEmail, updateProfile, createUserWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from '../FireBase/FireBase.init';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const[user, setUser] = useState(null)
    const[loading, setLoading] = useState(true)

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle =()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    //signout
    const signOutUser = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    //update user
    const updateUser = (updatedData)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, updatedData)
    }

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
        signInWithGoogle,
        signOutUser,
        onAuthStateChanged,
        updateUser,
        resetPassword,
        user,
        setUser,
        loading,


    }
    return <AuthContext value={authInfo}>
        {children}
    </AuthContext>
};

export default AuthProvider;