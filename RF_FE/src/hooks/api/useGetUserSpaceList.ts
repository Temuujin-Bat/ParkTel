// Third party
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

// Components
import { UserSpaceListController } from "../../services";
import { QUERY_KEYS } from "../../utils/enums";
import { spaceList } from "../../store/spaceList/slice";

export function useGetUserSpaceListAPI() {
  const dispatch = useDispatch();

  const { isSuccess, data, isPending } = useQuery({
    queryKey: [QUERY_KEYS.SPACELIST],
    queryFn: () => UserSpaceListController(),
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (isSuccess) {
      dispatch(spaceList.setUserSpaceList(data));
    }
  }, [data]);

  return { isPending };
}
