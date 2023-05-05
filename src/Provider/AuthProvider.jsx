import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,signOut,signInWithPopup,GoogleAuthProvider,GithubAuthProvider} from 'firebase/auth';
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  // Replace with your Firebase project's config object
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId ,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId ,
  appId: import.meta.env.VITE_appId

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const[loading,setLoading]=useState(true);


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

  const signInWithGoogle = () => {
    setLoading(true);
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const signInWithGitHub = () => {
    setLoading(true);
    const auth = getAuth();
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    signInWithGoogle,
    signInWithGitHub
    
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;