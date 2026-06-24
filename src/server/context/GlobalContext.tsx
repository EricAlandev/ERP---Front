import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { UserType } from '../../types/UserTypes';

interface GlobalContextType {
  token: string | null;
  userData: UserType | null;
  loading: boolean | null;
  login: (user: UserType) => void;
  logout: () => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [userData, setUserData] = useState<UserType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const login = (user: UserType) => {
    localStorage.setItem('token', user?.token || "");
    localStorage.setItem('user', JSON.stringify(user.email));
    
    if(user?.token && user?.email){
      setToken(user.token);
      setUserData(user);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    setToken(null);
    setUserData(null);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');

    if (storedUser) {
      try {
        setUserData(JSON.parse(storedUser));
      } catch (error) {
        console.error("Failed to parse user data from localStorage", error);
      }
    }

    if (storedToken) {
      setToken(storedToken);
    }

    setLoading(false);
  }, []);

  return (
    <GlobalContext.Provider value={{loading, token, userData, login, logout }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};