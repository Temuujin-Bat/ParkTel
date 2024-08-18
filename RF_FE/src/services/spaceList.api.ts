// Third party
import axios from "axios";

// Components
import { TListYourSpace } from "../types/requests";

const SpaceListController = async (listSpaceData: TListYourSpace) => {
  try {
    await axios.post(
      "http://localhost:1010/api/v1/spaceList/list-your-space",
      listSpaceData,
      { withCredentials: true }
    );
  } catch (error) {
    throw error;
  }
};

const UserSpaceListController = async () => {
  try {
    const response = await axios.post(
      "http://localhost:1010/api/v1/spaceList/space-owner",
      {},
      {
        withCredentials: true,
      }
    );

    return response?.data;
  } catch (error) {
    throw error;
  }
};

export { SpaceListController, UserSpaceListController };
