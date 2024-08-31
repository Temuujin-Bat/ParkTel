// Components
import { RootState } from "..";

const getUserSpaceList = (state: RootState) =>
  state.userSpaceListReducer.userSpaceList;

const getSingleSpaceSpaceList = (state: RootState) =>
  state.userSpaceListReducer.userSingleSpaceList;

const getAllSpaceList = (state: RootState) =>
  state.userSpaceListReducer.allSpaceList;

export { getUserSpaceList, getSingleSpaceSpaceList, getAllSpaceList };
