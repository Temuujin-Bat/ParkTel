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

const GetUserSingleSpaceListController = async (id: string) => {
  try {
    const response = await axios.get(
      `http://localhost:1010/api/v1/spaceList/space-owner/${id}`,
      {
        withCredentials: true,
      }
    );

    return response?.data;
  } catch (error) {
    throw error;
  }
};

const EditUserSpaceListController = async ({
  id,
  updatedData,
}: {
  id: string;
  updatedData: TListYourSpace;
}) => {
  try {
    const response = await axios.post(
      `http://localhost:1010/api/v1/spaceList/space-owner/edit/${id}`,
      updatedData,
      {
        withCredentials: true,
      }
    );

    return response?.data;
  } catch (error) {
    throw error;
  }
};

const GetUserSpaceListController = async () => {
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

const DeleteUserSpaceListController = async (id: string) => {
  try {
    const response = await axios.delete(
      `http://localhost:1010/api/v1/spaceList/space-owner/${id}`,
      {
        withCredentials: true,
      }
    );

    return response.data.updatedSpaceList;
  } catch (error) {
    throw error;
  }
};

export {
  SpaceListController,
  GetUserSingleSpaceListController,
  EditUserSpaceListController,
  GetUserSpaceListController,
  DeleteUserSpaceListController,
};
