import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check logged in user
  useEffect(() => {
    const checkUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await api.get("/auth/me");
        setUser(res.data);
      } catch (err) {
        localStorage.removeItem("token");
        setUser(null);
      }

      setLoading(false);
    };

    checkUser();
  }, []);

  // Login
  const login = async (email, password) => {
    const res = await api.post("/auth/login", {
      email,
      password,
    });

    localStorage.setItem(
      "token",
      res.data.access_token
    );

    setUser(res.data.user);

    return res.data;
  };

  // Register
  const register = async (
    full_name,
    email,
    password
  ) => {
    const res = await api.post("/auth/register", {
      full_name,
      email,
      password,
    });

    localStorage.setItem(
      "token",
      res.data.access_token
    );

    setUser(res.data.user);

    return res.data;
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () =>
  useContext(AuthContext);