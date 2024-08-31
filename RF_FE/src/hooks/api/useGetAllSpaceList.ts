// Third party
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

// Components
import { GetAllSpaceListController } from "../../services";
import { QUERY_KEYS } from "../../utils/enums";
import { spaceList } from "../../store/spaceList/slice";

export function useGetAllSpaceList() {
  const dispatch = useDispatch();

  const { isSuccess, data, isPending } = useQuery({
    queryKey: [QUERY_KEYS.ALLSPACELIST],
    queryFn: GetAllSpaceListController,
  });

  useEffect(() => {
    if (isSuccess) {
      dispatch(spaceList.setAllSpaceList(data));
    }
  }, [data, isSuccess, dispatch]);

  return { data, isPending };
}
