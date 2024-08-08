// Third party
import { useMutation } from "@tanstack/react-query";

// Components
import { ResetPasswordController } from "../../services/auth.api";
import { useNavigate } from "react-router-dom";

export function useResetPasswordAPI() {
  const navigate = useNavigate();

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: ResetPasswordController,
    onSuccess: (response) => {
      if (response) {
        navigate("/login");
      }
    },
    onError: (err) => {
      console.error(
        `ERROR! invite reset-password request threw an Exception! ${err}`
      );
    },
  });

  return { mutate, isPending, isSuccess };
}
