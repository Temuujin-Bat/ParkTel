// Components
import { useAppSelector } from "./useAppStore";

export function useAuth() {
  const user = useAppSelector((state) => state.authReducer);

  const isLoggedIn = (): boolean => {
    return user?.userDetails?.userID ? true : false;
  };

  return { isLoggedIn };
}
