// Third party
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// Components
import { EditUserSpaceListController } from "../../services";
import { QUERY_KEYS } from "../../utils/enums";
import { spaceList } from "../../store/spaceList/slice";

export function useEditSpaceListAPI() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const { mutate, isPending, data } = useMutation({
    mutationFn: EditUserSpaceListController,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.SINGLESPACELIST, QUERY_KEYS.SPACELIST],
      });

      dispatch(spaceList.setUserSingleSpaceList(data));

      navigate("/space-owner");
    },
    onError: (err) => {
      console.error(
        `ERROR! invite edit space list request threw an Exception! ${err}`
      );
    },
  });

  return { mutate, isPending };
}
