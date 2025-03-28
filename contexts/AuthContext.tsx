'use client';

import { createContext, ReactNode, useContext, useState } from 'react';
import { User } from '@supabase/supabase-js';

type AuthContext = {
  isAuthenticated: boolean
  authUser: User | null
};

const Context = createContext<AuthContext | undefined>(undefined);

const mockUser = {
  id: 'mock-user-id',
  user_metadata: {
    user_name: 'Guest User',
    avatar_url: 'https://avatars.githubusercontent.com/u/0',
  }
} as unknown as User;

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  // Always authenticated with mock user
  const [isAuthenticated] = useState(true);
  const [authUser] = useState<User | null>(mockUser);

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
