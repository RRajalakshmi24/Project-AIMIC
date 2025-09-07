import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, LoginCredentials, RegisterData, AuthContextType } from '../types/auth';
import { authService } from '../services/authService';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing authentication on app load
    const savedToken = authService.getToken();
    const savedUser = authService.getUser();
    
    if (savedToken && savedUser && authService.isTokenValid()) {
      setToken(savedToken);
      setUser(savedUser);
    }
    
    setIsLoading(false);
  }, []);

  const login = async (credentials: LoginCredentials): Promise<void> => {
    try {
      const response = await authService.login(credentials);
      
      setToken(response.token);
      setUser(response.user);
      
      authService.setToken(response.token);
      authService.setUser(response.user);
    } catch (error) {
      throw error;
    }
  };

  const register = async (data: RegisterData): Promise<void> => {
    try {
      const response = await authService.register(data);
      
      setToken(response.token);
      setUser(response.user);
      
      authService.setToken(response.token);
      authService.setUser(response.user);
    } catch (error) {
      throw error;
    }
  };

  const logout = (): void => {
    setToken(null);
    setUser(null);
    
    authService.removeToken();
    authService.removeUser();
  };

  const value: AuthContextType = {
    user,
    token,
    login,
    register,
    logout,
    isAuthenticated: !!token && !!user,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};