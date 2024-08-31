// Third party
import axios from "axios";

// Components
import { TListYourSpace } from "../types/requests";

const SpaceListController = async (listSpaceData: TListYourSpace) => {
  await axios.post(
    "http://localhost:1010/api/v1/spaceList/list-your-space",
    listSpaceData,
    { withCredentials: true }
  );
};

const GetUserSingleSpaceListController = async (id: string) => {
  const response = await axios.get(
    `http://localhost:1010/api/v1/spaceList/space-owner/${id}`,
    {
      withCredentials: true,
    }
  );

  return response?.data;
};

const EditUserSpaceListController = async ({
  id,
  updatedData,
}: {
  id: string;
  updatedData: TListYourSpace;
}) => {
  const response = await axios.post(
    `http://localhost:1010/api/v1/spaceList/space-owner/edit/${id}`,
    updatedData,
    {
      withCredentials: true,
    }
  );

  return response?.data;
};

const GetUserSpaceListController = async () => {
  const response = await axios.post(
    "http://localhost:1010/api/v1/spaceList/space-owner",
    {},
    {
      withCredentials: true,
    }
  );

  return response?.data;
};

const DeleteUserSpaceListController = async (id: string) => {
  const response = await axios.delete(
    `http://localhost:1010/api/v1/spaceList/space-owner/${id}`,
    {
      withCredentials: true,
    }
  );

  return response.data.updatedSpaceList;
};

const GetAllSpaceListController = async () => {
  const response = await axios.post(
    "http://localhost:1010/api/v1/spaceList/spaces",
    {
      withCredentials: true,
    }
  );

  return response.data;
};

export {
  SpaceListController,
  GetUserSingleSpaceListController,
  EditUserSpaceListController,
  GetUserSpaceListController,
  DeleteUserSpaceListController,
  GetAllSpaceListController,
};
