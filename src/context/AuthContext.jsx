import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
	const initAuth = async () => {
	  try {
		await getUserData(); // si la cookie existe y es válida, traerá los datos
	  } catch (error) {
		console.error('Error al inicializar la autenticación:', error);
		logout();
	  }
	  setIsLoading(false);
	};
  
	initAuth();
  }, []);
  
  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:5005/diplome/auth/login', { email, password },  { withCredentials: true });
	  console.log(response.data);
      const { user } = response.data;

      setCurrentUser(user);
      
      return user;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Error al iniciar sesión');
    }
  };
  
  const getUserData = async () => {
    try {
		const response = await axios.get('http://localhost:5005/diplome/user', { withCredentials: true });
		console.log(response.data);
		const { user } = response.data;
		('/dashboard');
		setCurrentUser(user);

    } catch (error) {
      console.error('Error al refrescar token:', error);
      logout();
      return false;
    }
  };
  
  const logout = async () => {
	navigate('/login');
    await axios.get('http://localhost:5005/diplome/auth/logout',  { withCredentials: true });
    setCurrentUser(null);
  };
  
  const resetPassword = async (email) => {
    try {
      await axios.post('/api/auth/reset-password', { email });
      return true;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Error al solicitar restablecimiento de contraseña');
    }
  };
  
  const value = {
    currentUser,
    isAuthenticated: !!currentUser,
    isLoading,
    login,
    logout,
    resetPassword
  };
  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};