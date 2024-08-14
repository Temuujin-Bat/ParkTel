// Third party
import axios from "axios";
import { TListYourSpace } from "../types/requests";

// Components

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

export { SpaceListController };
