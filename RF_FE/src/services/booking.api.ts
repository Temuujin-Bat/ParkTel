// Third party
import axios from "axios";

const CreateBookingController = async ({
  id,
  enterAfter,
  exitBefore,
  vehicleNumber,
}: {
  id: string;
  enterAfter: string;
  exitBefore: string;
  vehicleNumber: string;
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

const GetDriverBookingController = async () => {
  const response = await axios.post(
    "http://localhost:1010/api/v1/book/driver",
    {},
    { withCredentials: true }
  );

  return response.data;
};

const GetOwnerReservationsController = async () => {
  const response = await axios.post(
    "http://localhost:1010/api/v1/book/space-owner/your-reservations",
    {},
    { withCredentials: true }
  );

  return response.data;
};

export {
  CreateBookingController,
  GetDriverBookingController,
  GetOwnerReservationsController,
};
