"use client";
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useRouter } from "next/navigation";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  
  useEffect(() => {
	const initAuth = async () => {
	  try {
		await getUserData(); // si la cookie existe y es válida, traerá los datos
	  } catch (error) {
		console.error('Error al inicializar la autenticación:', error);
		// logout();
	  }
	  setIsLoading(false);
	};
  
	initAuth();
  }, []);
  
  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:5005/diplome/auth/login', { email, password },  { withCredentials: true });
      const { user } = response.data;

      setCurrentUser(user);
      
      return user;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Error al iniciar sesión');
    }
  };

  const register = async ( first_name, last_name, email, password, phone, role ) => {
	console.log("Received")
	console.log({ first_name, last_name, email, password, phone, role })
    try {
      const response = await axios.post('http://localhost:5005/diplome/auth/register', { first_name, last_name, email, password, phone, role },  { withCredentials: true });
	  console.log(response.data);
      const { user } = response.data;

      setCurrentUser(user);
      
      return user;
    } catch (error) {
		console.log(error)
      throw new Error(error.response?.data?.message || 'Error al iniciar sesión');
    }
  };
  
  const getUserData = async () => {
    try {
		const response = await axios.get('http://localhost:5005/diplome/user', { withCredentials: true });
		const { user } = response.data;
		setCurrentUser(user);

    } catch (error) {
      console.error('Error al refrescar token:', error);
    //   logout();
      return false;
    }
  };
  
  const logout = async () => {
	router.push("/");
    await axios.get('http://localhost:5005/diplome/auth/logout',  { withCredentials: true });
    setCurrentUser(null);
  };
  
  const forgotPassword = async (email) => {
    try {
      const response = await axios.post('http://localhost:5005/diplome/auth/forgot-password', { email });
	  const { status } = response.data;
      return status == "success"
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Error al solicitar restablecimiento de contraseña');
    }
  };

  const resetPassword = async (token, password) => {
	try {
      const response = await axios.post(`http://localhost:5005/diplome/auth/reset-password/${token}`, { password });
	  const { status } = response.data;
      return status == "success"
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Error al solicitar restablecimiento de contraseña');
    }
  };
  
  const value = {
    currentUser,
    isAuthenticated: !!currentUser,
    isLoading,
	register,
    login,
    logout,
    forgotPassword,
	resetPassword
  };
  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};