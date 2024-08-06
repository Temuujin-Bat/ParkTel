// Components
import { decryptData } from "../utils/crypto_util";

export function useAuth() {
  const getToken = () => {
    const token = decryptData("token", "sessionStorage");

    return token;
  };

  const isLoggedIn = (): boolean => {
    const token = decryptData("token", "sessionStorage");

    return !!token;
  };

  return { isLoggedIn, getToken };
}
