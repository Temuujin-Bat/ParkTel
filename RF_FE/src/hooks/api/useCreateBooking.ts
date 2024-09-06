// Third party
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

// Components
import { CreateBookingController } from "../../services/booking.api";

export function useCreateBookingAPI() {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: CreateBookingController,
    onSuccess: () => {
      navigate("/");
    },
    onError: (err) => {
      console.error(
        `ERROR! invite creating booking request threw an Exception! ${err}`
      );
    },
  });

  return { mutate, isPending };
}
