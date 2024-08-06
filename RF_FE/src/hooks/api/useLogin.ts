// Third party
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// Components
import { LoginController } from "../../services/auth.api";

export function useLoginAPI() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { mutate } = useMutation({
    mutationFn: LoginController,
    onSuccess: (response) => {
      if (response) {
        const authToken = response.data.token || "";
        const userData = { ...response.data };

        navigate("/");
      }
    },
    onError: (err) => {
      console.error(`ERROR! invite login request threw an Exception! ${err}`);
    },
  });

  return { mutate };
}
