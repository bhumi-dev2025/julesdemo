import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    setIsLoggedIn(true);
    // After login, you might want to redirect the user.
    // For now, we'll just set the state. A component can handle redirection.
    alert('Login successful! (Simulated)');
  };

  const logout = () => {
    setIsLoggedIn(false);
    navigate('/'); // Redirect to home on logout
  };

  const requireAuth = () => {
    if (!isLoggedIn) {
      alert('You must be logged in to perform this action.');
      navigate('/login');
      return false;
    }
    return true;
  };

  const value = { isLoggedIn, login, logout, requireAuth };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
