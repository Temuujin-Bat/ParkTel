// Components
import { RootState } from "..";

const getUserSpaceList = (state: RootState) =>
  state.userSpaceListReducer.userSpaceList;

export { getUserSpaceList };
