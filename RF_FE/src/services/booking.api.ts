// Third party
import axios from "axios";

const CreateBookingController = async ({
  id,
  enterAfter,
  exitBefore,
  vehicleNumber,
}) => {
  await axios.post(
    `http://localhost:1010/api/v1/book/booking/${id}`,
    {
      enterAfter,
      exitBefore,
      vehicleNumber,
    },
    { withCredentials: true }
  );
};

const GetOwnerReservationsController = async () => {
  const response = await axios.post(
    "http://localhost:1010/api/v1/book/active-reservations",
    {},
    { withCredentials: true }
  );

  return response.data;
};

export { CreateBookingController, GetOwnerReservationsController };
