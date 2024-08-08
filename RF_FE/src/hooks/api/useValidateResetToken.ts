// Third party
import { useMutation } from "@tanstack/react-query";

// Components
import { ValidateResetToken } from "../../services/auth.api";
import { useNavigate } from "react-router-dom";

export function useValidateResetToken() {
  const navigate = useNavigate();

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: ValidateResetToken,
    onError: (err) => {
      console.error(
        `ERROR! invite validate-reset-password request threw an Exception! ${err}`
      );
      navigate("/not-found");
    },
  });

  return { mutate, isPending, isSuccess };
}
