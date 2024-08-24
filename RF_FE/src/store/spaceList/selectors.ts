// Components
import { RootState } from "..";

const getUserSpaceList = (state: RootState) =>
  state.userSpaceListReducer.userSpaceList;

const getSingleSpaceSpaceList = (state: RootState) =>
  state.userSpaceListReducer.userSingleSpaceList;

export { getUserSpaceList, getSingleSpaceSpaceList };
