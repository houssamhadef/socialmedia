"use client";

import { createContext, useEffect, useReducer, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const InitialState = {
  isAuthenticated: false,
  user: null
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { isAuthenticated: true, user: action.payload };
    case "LOGOUT":
      return { isAuthenticated: false, user: null };
    default:
      return state;
  }
};

export const AuthContext = createContext({
  state: InitialState,
  dispatch: () => null,
});

export function AuthProvider({ children }) {
  const router = useRouter();
  const path = usePathname();
  const [state, dispatch] = useReducer(reducer, InitialState);

  // ✅ auth token only set inside useEffect
  useEffect(() => {
    if (typeof window === "undefined") return; // ensure client only

    const token = document.cookie.includes("token=")
      ? document.cookie.split("token=").pop().split(";")[0]
      : null;

    if (token) {
      dispatch({ type: "LOGIN", payload: token });
    } else {
      if (path === "/") {
        router.push("/login");
        dispatch({ type: "LOGOUT" });
      }
    }
  }, [path, router]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
