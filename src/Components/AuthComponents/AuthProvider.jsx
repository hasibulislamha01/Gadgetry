import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import app from "./firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import axios from "axios";


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const auth = getAuth(app)
    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true)

    // authentication state observer
    useEffect(() => {
        onAuthStateChanged(auth, async (currentUser) => {
            const loggedUser = { email: currentUser?.email || user?.email }
            if (currentUser) {
                console.log('user in the auth state', currentUser)
                setUser(currentUser)
                setLoading(false)

                // generating token
                await axios.post('https://booknest-phi.vercel.app/jwt',
                    loggedUser,
                    { withCredentials: true }
                )
                    .then(response => {
                        console.log('token', response.data)
                    }).catch(error => {
                        console.error(error.message)
                    })

            } else {
                axios.post('https://booknest-phi.vercel.app/logout',
                    loggedUser,
                    { withCredentials: true })
                    .then(response => {
                        console.log('token clear', response.data)
                    }).catch(error => {
                        console.error(error.message)
                    })
                setUser(null)
                setLoading(false)
            }
        });
    }, [user, auth])

    // Create new user with email and password
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login Users with email and password
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // login user with google
    const loginWithGoogle = async (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // login with github
    const loginWithGithub = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }


    // update a user 
    const updateUserProfile = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    // logout user
    const logoutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    console.log(user);



    const authInfo = {
        createUser,
        loginUser,
        loginWithGoogle,
        loginWithGithub,
        updateUserProfile,
        logoutUser,
        loading,
        user,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;