// Components
import { useAppSelector } from "./useAppStore";

export function useAuth() {
  const user = useAppSelector((state) => state.authReducer);

  return user?.userDetails?.userID ? true : false;
}
