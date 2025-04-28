// src/hooks/useAuth.js
import { useState, useEffect, createContext, useContext } from 'react';
import { onAuthStateChanged, sendPasswordResetEmail, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../services/firebase';

// Crear un contexto para compartir el estado de autenticación en toda la app
const AuthContext = createContext();

// Custom hook para utilizar el estado de autenticación
export const useAuthContext = () => useContext(AuthContext);

// Componente proveedor para envolver la aplicación
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);  // Para manejar la carga inicial

  // Suscribirse a los cambios en el estado de autenticación
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);  // Si el usuario está autenticado, establece el objeto de usuario
      setLoading(false);  // Cambia el estado de carga
    });

    return () => unsubscribe();  // Limpia la suscripción al desmontarse el componente
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Funciones de autenticación
export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};

export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return { success: true };
  } catch (error) {
    return { success: false, message: error.message };
  }
};