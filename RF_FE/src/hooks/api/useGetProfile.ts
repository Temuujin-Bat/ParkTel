// Third party
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

// Components
import { GetProfileController } from "../../services";
import { QUERY_KEYS } from "../../utils/enums";
import { authActions } from "../../store/auth/slice";

export function useGetProfileAPI() {
  const dispatch = useDispatch();

  const { isSuccess, data, isPending } = useQuery({
    queryKey: [QUERY_KEYS.PROFILE],
    queryFn: GetProfileController,
  });

  useEffect(() => {
    if (isSuccess) {
      dispatch(authActions.setUserDetails(data));
    }
  }, [data]);

  return { data, isPending };
}
