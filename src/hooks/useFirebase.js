import React, { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false)
  const auth = getAuth();
  const googleSignIn = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user 
        setUser(user);
        saveUserToDb(user.email, user.displayName, 'PUT')
        console.log(result.user);
      })
      .finally(() => setIsLoading(false));
  };
  const registerUser = (email, password,name, history,location) => {
    setIsLoading(true)
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => { 
      const newUser = {email, displayName:name}
      setUser(newUser)
      saveUserToDb(email, name,'POST')
      updateProfile(auth.currentUser, {
        displayName:name
      }).then(() => {
       
      }).catch((error) => {
       
      })
      const destination = location?.state?.from || "/";
        history.replace(destination); 
    })
    .catch((error) => { 
       
    })
    .finally(()=>setIsLoading(false));
};
  const processLogin = (email, password, history, location) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        const destination = location?.state?.from || "/";
        history.replace(destination);
      })
      .finally(() => setIsLoading(false));
  };
  const logOut = () => {
    signOut(auth)
      .then((result) => {})
      .finally(() => setIsLoading(false));
  };
  const saveUserToDb= (email, displayName,method)=>{
    const user = {email, displayName}
    fetch('https://lit-ravine-71907.herokuapp.com/users',{
      method:method,
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=> {})
  }
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);
  useEffect(()=>{
    fetch(`https://lit-ravine-71907.herokuapp.com/users/${user.email}`)
    .then(res=> res.json())
    .then(data=> setAdmin(data.admin))
  },[user.email])

  return { user, logOut, googleSignIn, registerUser, processLogin, isLoading,admin,setIsLoading };
};

export default useFirebase;
