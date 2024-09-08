// Third party
import { useQuery } from "@tanstack/react-query";

// Components
import { GetOwnerReservationsController } from "../../services";
import { QUERY_KEYS } from "../../utils/enums";

export function useGetOwnerReservations() {
  const { data, isPending } = useQuery({
    queryKey: [QUERY_KEYS.OWNERRESERVATION],
    queryFn: GetOwnerReservationsController,
  });

  return { data, isPending };
}
