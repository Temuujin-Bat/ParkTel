// Third party
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

// Components
import { ValidateResetTokenController } from "../../services/auth.api";

export function useValidateResetToken() {
  const navigate = useNavigate();

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: ValidateResetTokenController,
    onError: (err) => {
      console.error(
        `ERROR! invite validate-reset-password request threw an Exception! ${err}`
      );
      navigate("/not-found");
    },
  });

  return { mutate, isPending, isSuccess };
}
