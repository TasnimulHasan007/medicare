import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init"
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth"

// initialize firebase
initializeAuthentication()

// hook
const useFirebase = () => {
  // states
  const [user, setUser] = useState({})
  const [error, setError] = useState("")
  // auth
  const auth = getAuth()
  // google sign in
  const googleProvider = new GoogleAuthProvider()
  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        setUser(res.user)
      })
      .catch((error) => {
        setError(error.message)
      })
  }
  // onAuthSateChanged
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      }
    })
  }, [auth])
  // sign out
  const logOut = () => {
    signOut(auth).then(() => {
      setUser({})
    })
  }
  // return
  return {
    user,
    error,
    auth,
    googleSignIn,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    logOut,
  }
}

export default useFirebase
