// Third party
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";

// Components
import { LoginController } from "../../services/auth.api";
import { authActions } from "../../store/auth/slice";
import { TTokenDetails } from "../../store/auth/types";

export function useLoginAPI() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: LoginController,
    onSuccess: (response) => {
      if (response) {
        const token = response.token;
        const decodedToken = jwtDecode<TTokenDetails>(token);

        if (decodedToken) {
          dispatch(
            authActions.setUserDetails({
              userID: decodedToken.userID,
              email: decodedToken.email,
              firstName: decodedToken.firstName,
              lastName: decodedToken.lastName,
              mobile: decodedToken.mobile,
              role: decodedToken.role,
            })
          );
        }

        navigate("/");
      }
    },
    onError: (err) => {
      console.error(`ERROR! invite login request threw an Exception! ${err}`);
    },
  });

  return { mutate, isPending, isError };
}
