// Third party
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

// Components
import { ChangePasswordController } from "../../services";

export function useChangePasswordAPI() {
  const navigate = useNavigate();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: ChangePasswordController,
    onSuccess: () => {
      navigate("/space-owner");
    },
    onError: (err) => {
      console.error(
        `ERROR! invite change password request threw an Exception! ${err}`
      );
    },
  });

  return { mutate, isPending, isError };
}
