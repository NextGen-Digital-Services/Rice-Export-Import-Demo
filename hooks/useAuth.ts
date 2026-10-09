'use client';

import { useState, useEffect } from 'react';

const AUTH_KEY = 'taxvi_admin_auth_v1';

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const authVal = localStorage.getItem(AUTH_KEY);
    if (authVal === 'true') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const login = (email: string, pass: string): boolean => {
    if (email === 'admin@taxviglobal.com' && pass === 'Admin@123') {
      localStorage.setItem(AUTH_KEY, 'true');
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem(AUTH_KEY);
    setIsAuthenticated(false);
  };

  return { isAuthenticated, isLoading, login, logout };
}
