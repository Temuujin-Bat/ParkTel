// Third party
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// Components
import { DeleteUserSpaceListController } from "../../services";
import { spaceList } from "../../store/spaceList/slice";

export function useDeleteUserSpaceListAPI() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { mutate, isPending } = useMutation({
    mutationFn: DeleteUserSpaceListController,
    onSuccess: (data) => {
      dispatch(spaceList.setUserSpaceList(data));
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
