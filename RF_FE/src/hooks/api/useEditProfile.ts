// Third party
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

// Components
import { EditProfileController } from "../../services";
import { authActions } from "../../store/auth/slice";
import { QUERY_KEYS } from "../../utils/enums";

export function useEditProfileAPI() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: EditProfileController,
    onSuccess: async (data) => {
      dispatch(authActions.setUserDetails(data));

      await queryClient.setQueryData([QUERY_KEYS.PROFILE], data);
    },
    onError: (err) => {
      console.error(
        `ERROR! invite edit profile request threw an Exception! ${err}`
      );
    },
  });

  return { mutate, isPending };
}
