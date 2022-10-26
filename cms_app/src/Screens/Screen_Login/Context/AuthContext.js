import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../../../firebase'

const AuthContext = React.createContext();

// useAuth is a 'hook.' Why is it a hook? I don't know. -Tino 10/25/22
export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {

    // the line below is a 'state' the 'default' user is empty because useState() is empty
    const [currentUser, setCurrentUser] = useState();

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }


    // we only want to set the user once 
    useEffect(() => {
        // this allow us to set the current user
        const unsubsribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })

        return unsubsribe
    }, [])

    const value = {
        currentUser,
        signup
    }

    return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
    )
}
