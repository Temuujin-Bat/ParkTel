// Third party
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

// Components
import { GetUserSingleSpaceListController } from "../../services";
import { QUERY_KEYS } from "../../utils/enums";
import { spaceList } from "../../store/spaceList/slice";

export function useGetUserSingleSpaceListAPI(id: string) {
  const dispatch = useDispatch();

  const { isSuccess, data } = useQuery({
    queryKey: [QUERY_KEYS.SINGLESPACELIST, id],
    queryFn: () => GetUserSingleSpaceListController(id),
  });

  useEffect(() => {
    if (isSuccess) {
      dispatch(spaceList.setUserSingleSpaceList(data));
    }
  }, [data, dispatch, isSuccess]);
}
