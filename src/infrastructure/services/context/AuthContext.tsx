import React, { useContext, useState, useEffect } from 'react';
import { auth } from '@src/firebase';
import firebase from "firebase/app";


export interface iAuthProvider {
  children: JSX.Element & React.ReactNode;
}

export interface iValue {
  currentUser: firebase.User | null;
  login: (email: string, password: string) => Promise<firebase.auth.UserCredential>;
  signup: (email: string, password: string) => Promise<firebase.auth.UserCredential>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateEmail: (email: string) => Promise<void> | undefined;
  updatePassword: (password: string) => Promise<void> | undefined;
}

const AuthContext = React.createContext<iValue | null>(null);

export const useAuth = (): iValue | null => {
  return useContext(AuthContext);
};

export const AuthProvider:React.FC<iAuthProvider> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null >(null);
  const [loading, setLoading] = useState(true);

  function signup(email: string, password: string) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email: string, password: string) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email: string) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email: string) {
    return currentUser?.updateEmail(email);
  }

  function updatePassword(password: string) {
    return currentUser?.updatePassword(password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value: iValue = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};