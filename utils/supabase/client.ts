// Mock Supabase client
const mockClient = {
  auth: {
    getUser: async () => ({ data: { user: null }, error: null }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
    signOut: async () => ({ error: null })
  },
  from: (table: string) => ({
    insert: () => ({
      select: async () => ({ data: [], error: null })
    }),
    select: async () => ({ data: [], error: null })
  }),
  rpc: (proc: string, params?: any) => ({
    then: (callback: any) => callback({ data: [], error: null })
  })
};

export const createClient = () => mockClient;

