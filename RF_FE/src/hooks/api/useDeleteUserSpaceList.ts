// Third party
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// Components
import { DeleteUserSpaceListController } from "../../services";
import { spaceList } from "../../store/spaceList/slice";
import { QUERY_KEYS } from "../../utils/enums";

export function useDeleteUserSpaceListAPI() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: DeleteUserSpaceListController,
    onSuccess: async (data) => {
      dispatch(spaceList.setUserSpaceList(data));

      await queryClient.setQueryData([QUERY_KEYS.SPACELIST], data);

      navigate("/space-owner");
    },
    onError: (err) => {
      console.error(
        `ERROR! invite add space list request threw an Exception! ${err}`
      );
    },
  });

  return { mutate, isPending };
}
