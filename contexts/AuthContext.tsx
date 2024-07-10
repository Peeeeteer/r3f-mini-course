'use client';

import { useRouter } from 'next/navigation';
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

  const router = useRouter()
  const supabase = createClient();

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getUser();
      if (data && data.user) {
        setIsAuthenticated(true)
        setAuthUser(data.user)
      } else {
        setIsAuthenticated(false)
        setAuthUser(null)
      }
    };

    checkSession();
  }, []);

  useEffect(() => {
    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_OUT') {
        setIsAuthenticated(false)
        setAuthUser(null)
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router]);

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
