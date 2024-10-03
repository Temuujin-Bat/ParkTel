// Third party
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// Components
import { LogoutController } from "../../services/auth.api";
import { authActions } from "../../store/auth/slice";
import { persistor } from "../../store";

export function useLogoutAPI() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: LogoutController,
    onSuccess: () => {
      dispatch(authActions.resetState());
      persistor.purge();
      sessionStorage.clear();
      localStorage.clear();

      navigate("/");
    },
    onError: (err) => {
      console.error(`ERROR! invite logout request threw an Exception! ${err}`);
    },
  });

  return { mutate, isPending, isError };
}
