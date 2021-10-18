import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init"
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth"

// initialize firebase
initializeAuthentication()

// hook
const useFirebase = () => {
  // states
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  // const [error, setError] = useState("")
  // auth
  const auth = getAuth()
  // google sign in
  const googleProvider = new GoogleAuthProvider()
  const googleSignIn = () => {
    setIsLoading(true)
    return signInWithPopup(auth, googleProvider)
  }
  // verify user
  const verifyUser = () => {
    sendEmailVerification(auth.currentUser)
  }
  // onAuthSateChanged
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser({})
      }
      setIsLoading(false)
    })
    return () => unsubscribed
  }, [auth])
  // sign out
  const logOut = () => {
    setIsLoading(true)
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .finally(() => setIsLoading(false))
  }
  // return
  return {
    user,
    // error,
    auth,
    isLoading,
    setIsLoading,
    googleSignIn,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    verifyUser,
    updateProfile,
    logOut,
  }
}

export default useFirebase
