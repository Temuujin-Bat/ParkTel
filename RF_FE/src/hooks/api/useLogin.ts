// Third party
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// Components
import { LoginController } from "../../services/auth.api";
import { authActions } from "../../store/auth/slice";

export function useLoginAPI() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: LoginController,
    onSuccess: (response) => {
      const { userID, role } = response;

      dispatch(
        authActions.setUserDetails({
          userID,
          role,
        })
      );

      navigate("/");
    },
    onError: (err) => {
      console.error(`ERROR! invite login request threw an Exception! ${err}`);
    },
  });

  return { mutate, isPending, isError };
}
