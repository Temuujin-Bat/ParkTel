// Third party
import { useQuery } from "@tanstack/react-query";

// Components
import { GetDriverBookingController } from "../../services";
import { QUERY_KEYS } from "../../utils/enums";

export function useGetDriverBooking() {
  const { data, isPending } = useQuery({
    queryKey: [QUERY_KEYS.DRIVERBOOKING],
    queryFn: GetDriverBookingController,
  });

  return { data, isPending };
}
