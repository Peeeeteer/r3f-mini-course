'use client';

import { createContext, ReactNode, useContext, useState, Dispatch, SetStateAction, useEffect } from 'react';

import { createClient } from "@/utils/supabase/client";
import { User } from '@supabase/supabase-js';

type AuthContext = {
  isAuthenticated: boolean
  authUser: User | null
};

const Context = createContext<AuthContext | undefined>(undefined);

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authUser, setAuthUser] = useState<User | null>(null)

  const supabase = createClient();

  useEffect(() => {
    const checkSession = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        setIsAuthenticated(false)
        setAuthUser(null)
      }
      setIsAuthenticated(true)
      setAuthUser(data.user)
    };

    checkSession();
  }, [supabase.auth]);

  return (
    <Context.Provider value={{ isAuthenticated, authUser }}>
      {children}
    </Context.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error('useUser must be used inside AuthContextProvider');
  }

  return context;
};

export default AuthContextProvider;
