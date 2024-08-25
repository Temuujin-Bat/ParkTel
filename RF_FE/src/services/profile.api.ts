// Third party
import axios from "axios";

// Components
import { TEditProfile } from "../types/requests/profile.type";

const GetProfileController = async () => {
  try {
    const response = await axios.post(
      "http://localhost:1010/api/v1/user/get-profile",
      {},
      {
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

const EditProfileController = async (updateData: Partial<TEditProfile>) => {
  try {
    const response = await axios.post(
      "http://localhost:1010/api/v1/user/edit-profile",
      updateData,
      {
        withCredentials: true,
      }
    );

    return response?.data?.data;
  } catch (error) {
    throw error;
  }
};

export { GetProfileController, EditProfileController };
