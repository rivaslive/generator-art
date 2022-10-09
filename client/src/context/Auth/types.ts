export type UserType = {
  createdAt: string;
  email: string;
  firstName: string;
  id: string;
  jwt: string;
  lastName: string;
  provider: 'phantom' | 'ledger' | 'coinbase' | 'burner';
  status: 'completed' | 'incomplete';
  wallet: string;
};

export type AuthContextType = {
  isAuthenticated: boolean;
  jwt: string;
  user: null | UserType;
  completeProfile(values: Omit<CompleteProfile, 'wallet' | 'provider'>): Promise<void>;
  loading: boolean;
  loadingCallbacks: boolean;
  logout: () => void;
};

export type AuthResponse = {
  newUser: boolean;
  user: UserType | null;
};

export type AuthRequest = {
  wallet: string;
  provider: 'phantom' | 'ledger' | 'coinbase' | 'burner';
};

export type CompleteProfile = AuthRequest & {
  firstName: string;
  lastName: string;
  email: string;
};
