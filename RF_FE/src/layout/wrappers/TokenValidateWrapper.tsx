import React, { ReactNode, useEffect } from "react";

// Third party
import { useParams } from "react-router-dom";

// Components
import { useValidateResetToken } from "../../hooks/api/useValidateResetToken";
import LoadingMUI from "../../components/LoadingMUI";

interface TokenValidationWrapperProps {
  children: ReactNode;
}

export const TokenValidationWrapper: React.FC<TokenValidationWrapperProps> = ({
  children,
}) => {
  const { token } = useParams();
  const {
    mutate: validateToken,
    isPending,
    isSuccess,
  } = useValidateResetToken();

  useEffect(() => {
    if (token) {
      validateToken(token);
    }
  }, [token, validateToken]);

  if (isPending) {
    return <LoadingMUI />;
  }

  if (isSuccess) {
    return children;
  }

  return null;
};
