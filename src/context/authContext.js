import React, { createContext, useState, useEffect, useCallback } from 'react';
import axios from '../utils/axiosConfig';
import url from '../constants';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const checkAuth = useCallback(async () => {
    try {
      await axios.post(`${url.BaseUrl}/surgeon/authme`);
      setIsAuthenticated(true);
    } catch (err) {
      setIsAuthenticated(false);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const login = async (email, password) => {
    try {
      const response = await axios.post(`${url.BaseUrl}/surgeon/login`, { email, password });
      if (response.data.message === 'Login Successfull') {
        localStorage.setItem('jwt', response.data.token);
        setIsAuthenticated(true);
      }
    } catch (err) {
      console.error('Login failed', err);
      setIsAuthenticated(false);
    }
  };

  const logout = async () => {
    await axios.post(`${url.BaseUrl}/surgeon/logout`);
    localStorage.removeItem('jwt');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, loading, axios }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;