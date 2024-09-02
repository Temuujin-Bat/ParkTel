// Third party
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

// Components
import { GetUserSpaceListController } from "../../services";
import { QUERY_KEYS } from "../../utils/enums";
import { spaceList } from "../../store/spaceList/slice";

export function useGetUserSpaceListAPI() {
  const dispatch = useDispatch();

  const { isSuccess, data, isPending } = useQuery({
    queryKey: [QUERY_KEYS.SPACELIST],
    queryFn: GetUserSpaceListController,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(spaceList.setUserSpaceList(data));
    }
  }, [data, isSuccess, dispatch]);

  return { data, isPending };
}
