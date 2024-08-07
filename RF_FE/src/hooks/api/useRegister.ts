// Third party
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

// Components
import { RegisterController } from "../../services/auth.api";

export function useRegisterAPI() {
  const navigate = useNavigate();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: RegisterController,
    onSuccess: (response) => {
      if (response) {
        navigate("/login");
      }
    },
    onError: (err) => {
      console.error(
        `ERROR! invite register request threw an Exception! ${err}`
      );
    },
  });

  return { mutate, isPending, isError };
}
