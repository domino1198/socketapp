import { createContext } from 'react';
import { User } from '../api/rest/controllers/data-contracts';

export interface ContextType {
  user?: User;
  setUser: (user?: User) => void;
  logOut: () => void;
}

export const AuthContext = createContext<ContextType | null>(null);
