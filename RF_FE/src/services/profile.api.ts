// Third party
import axios from "axios";

// Components
import { TEditProfile } from "../types/requests/profile.type";

const GetProfileController = async () => {
  const response = await axios.post(
    "http://localhost:1010/api/v1/user/get-profile",
    {},
    {
      withCredentials: true,
    }
  );

  return response.data;
};

const EditProfileController = async (updateData: Partial<TEditProfile>) => {
  const response = await axios.post(
    "http://localhost:1010/api/v1/user/edit-profile",
    updateData,
    {
      withCredentials: true,
    }
  );

  return response?.data?.data;
};

export { GetProfileController, EditProfileController };
