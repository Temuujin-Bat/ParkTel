import { FC, ReactNode } from "react";

// Third party
import { Navigate } from "react-router-dom";

// Components
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute: FC<{ children: ReactNode }> = ({ children }) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn()) {
    return <Navigate to="/login" />;
  }
  return children;
};

export { ProtectedRoute };
