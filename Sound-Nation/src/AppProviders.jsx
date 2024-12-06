import React from "react";
import { AuthProvider } from "./context/AuthContext";
import { FavorisProvider } from "./context/FavorisContext";


const AppProviders = ({ children }) => {
  return (
    <AuthProvider>
        <FavorisProvider>
            {children}
        </FavorisProvider>
    </AuthProvider>
  );
};

export default AppProviders;
