import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { UserProfile } from '@/types';
import { getCurrentUser, logout as doLogout, saveUser, setCurrentUserId, getUserByEmail, generateId } from '@/utils/storage';

interface AuthContextValue {
  user: UserProfile | null;
  loading: boolean;
  login: (email: string, password: string) => { success: boolean; error?: string };
  signup: (data: Omit<UserProfile, 'id' | 'accountType'>) => { success: boolean; error?: string };
  loginAsCompany: (companyName: string) => void;
  updateUser: (updates: Partial<UserProfile>) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const current = getCurrentUser();
    setUser(current);
    setLoading(false);
  }, []);

  const login = (email: string, password: string) => {
    const existing = getUserByEmail(email);
    if (!existing) return { success: false, error: 'No account found with this email.' };
    if (existing.password !== password) return { success: false, error: 'Incorrect password.' };
    if (existing.accountType === 'company') {
      return { success: false, error: 'This is a company account. Please use the company login.' };
    }
    setCurrentUserId(existing.id);
    setUser(existing);
    return { success: true };
  };

  const signup = (data: Omit<UserProfile, 'id' | 'accountType'>) => {
    const existing = getUserByEmail(data.email);
    if (existing) return { success: false, error: 'An account with this email already exists.' };

    const newUser: UserProfile = {
      ...data,
      id: generateId(),
      accountType: 'student',
    };
    saveUser(newUser);
    setUser(newUser);
    return { success: true };
  };

  const loginAsCompany = (companyName: string) => {
    const companyUser: UserProfile = {
      id: `company-${companyName.replace(/\s/g, '-').toLowerCase()}`,
      fullName: companyName,
      email: '',
      password: '',
      university: 'Cairo University',
      faculty: 'Commerce',
      section: 'Arabic',
      academicStatus: 'Fresh Graduate',
      careerExperience: 'No experience',
      graduationYear: '',
      accountType: 'company',
      companyName,
    };
    saveUser(companyUser);
    setUser(companyUser);
  };

  const updateUser = (updates: Partial<UserProfile>) => {
    const current = getCurrentUser();
    if (!current) return;
    const updated = { ...current, ...updates };
    saveUser(updated);
    setUser(updated);
  };

  const logout = () => {
    doLogout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, loginAsCompany, updateUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
