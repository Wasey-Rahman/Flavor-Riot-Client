import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,signOut } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  // Replace with your Firebase project's config object
  apiKey: "AIzaSyACzBZjHNCYVguRasHwXWE1lnTPvm1zl4c",

  authDomain: "flavor-riot-client-85197.firebaseapp.com",

  projectId: "flavor-riot-client-85197",

  storageBucket: "flavor-riot-client-85197.appspot.com",

  messagingSenderId: "213825592631",

  appId: "1:213825592631:web:38420074dd3555a96bceb2"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const[loading,setLoading]=useState(true);
// const user ={diaplayName :'Mithai'}

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, user => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const createUser = (email, password) => {
    setLoading(true);
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn =(email,password)=>{
    setLoading(true);
    const auth = getAuth();
    return signInWithEmailAndPassword(auth,email,password);
  }

  const logOut=()=>{
    setLoading(true);
    const auth = getAuth();
    return signOut(auth);
  }

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;