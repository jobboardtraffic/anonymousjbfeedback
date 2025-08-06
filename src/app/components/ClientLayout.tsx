'use client';

import Link from 'next/link'
import { createContext, useContext, useState, ReactNode } from 'react'

// Authentication Context
interface AuthContextType {
  isAuthenticated: boolean;
  isAuthorized: boolean;
  user: { name: string; role: string } | null;
  login: (credentials: { email: string; password: string }) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ name: string; role: string } | null>(null);
  
  // For demo purposes, consider users with 'verified' role as authorized
  const isAuthorized = user?.role === 'verified' || user?.role === 'admin';

  const login = (credentials: { email: string; password: string }) => {
    // Mock authentication - in real app, this would call your API
    if (credentials.email && credentials.password) {
      setIsAuthenticated(true);
      setUser({ 
        name: 'Demo User', 
        role: 'verified' // or 'admin' or 'unverified'
      });
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      isAuthorized,
      user,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
}

function AuthButton() {
  const { isAuthenticated, user, logout } = useAuth();
  
  if (isAuthenticated && user) {
    return (
      <div className="flex items-center space-x-4">
        <span className="text-gray-300 text-sm">
          {user.name} ({user.role})
        </span>
        <button
          onClick={logout}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    );
  }
  
  return (
    <Link
      href="/login"
      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
    >
      Login
    </Link>
  );
}

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <nav className="bg-slate-900 shadow-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-white">
                Anonymous JB Feedback
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              <Link href="/directory" className="text-gray-300 hover:text-white">
                Directory
              </Link>
              <Link href="/feedback/submit" className="text-gray-300 hover:text-white">
                Submit Feedback
              </Link>
              <AuthButton />
            </div>
          </div>
        </div>
      </nav>
      {children}
    </AuthProvider>
  );
}