// Third party
import { useQuery } from "@tanstack/react-query";

// Components
import { GetOwnerReservationsController } from "../../services";
import { QUERY_KEYS } from "../../utils/enums";

export function useGetAllBooking() {
  const { data, isPending } = useQuery({
    queryKey: [QUERY_KEYS.BOOKING],
    queryFn: GetOwnerReservationsController,
  });

  return { data, isPending };
}
