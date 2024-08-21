// Third party
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

// Components
import { EditProfileController } from "../../services";
import { authActions } from "../../store/auth/slice";

export function useEditProfileAPI() {
  const dispatch = useDispatch();

  const { mutate, isPending } = useMutation({
    mutationFn: EditProfileController,
    onSuccess: (data) => {
      dispatch(authActions.setUserDetails(data));
    },
    onError: (err) => {
      console.error(
        `ERROR! invite edit profile request threw an Exception! ${err}`
      );
    },
  });

  return { mutate, isPending };
}
