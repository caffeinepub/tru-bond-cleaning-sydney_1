import type React from "react";
import { createContext, useContext } from "react";

interface InternetIdentityContextType {
  isAuthenticated: boolean;
  login: () => Promise<void>;
  logout: () => void;
}

const InternetIdentityContext = createContext<InternetIdentityContextType>({
  isAuthenticated: false,
  login: async () => {},
  logout: () => {},
});

export function InternetIdentityProvider({
  children,
}: { children: React.ReactNode }) {
  return (
    <InternetIdentityContext.Provider
      value={{
        isAuthenticated: false,
        login: async () => {},
        logout: () => {},
      }}
    >
      {children}
    </InternetIdentityContext.Provider>
  );
}

export function useInternetIdentity() {
  return useContext(InternetIdentityContext);
}
