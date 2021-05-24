import React, { createContext, useCallback, useContext, useState } from "react";
import api from "../services/api";

interface AuthState {
  token: string;
  user: object;
}

interface SignInCredentials {
  username: string;
  password: string;
}

interface AuthContextData {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem("@fulltrack:token");
    const user = localStorage.getItem("@fulltrack:user");

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }
    return {} as AuthState;
  });

  const signIn = useCallback(async ({ username, password }) => {
    const response = await api.post("/login", { username, password });
    const { token, user } = response.data;
    localStorage.setItem("@fulltrack:token", token);
    localStorage.setItem("@fulltrack:user", JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@fulltrack:token");
    localStorage.removeItem("@fulltrack:user");
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an  AuthProvider");
  }
  return context;
}

export { useAuth, AuthProvider };
