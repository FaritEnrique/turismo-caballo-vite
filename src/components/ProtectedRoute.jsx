// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuth';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthContext();  // Cambié currentUser por user

  if (!user) {
    // Si no hay usuario autenticado, redirige a la página de login
    return <Navigate to="/login" />;
  }

  return children;  // Si hay usuario autenticado, renderiza la página protegida
};

export default ProtectedRoute;