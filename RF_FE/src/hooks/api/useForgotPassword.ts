// Third party
import { useMutation } from "@tanstack/react-query";

// Components
import { ForgotPasswordController } from "../../services/auth.api";

export function useForgotPasswordAPI() {
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: ForgotPasswordController,
    onError: (err) => {
      console.error(
        `ERROR! invite forgot-password request threw an Exception! ${err}`
      );
    },
  });

  return { mutate, isPending, isSuccess };
}
